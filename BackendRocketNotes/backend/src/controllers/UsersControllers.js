const AppError = require("../utils/AppErro");

const { hash, compare } = require("bcryptjs");

const sqliteConnection = require("../database/sqlite");

class UsersControllers {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();

    const checkUsersExist = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUsersExist) {
      throw new AppError("Este email ja está em uso");
    }

    const hashedPassoword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name,email,password) values(?,?,?)",
      [name, email, hashedPassoword]
    );

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;

    const user_id = request.user.id;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [
      user_id,
    ]);

    if (!user) {
      throw new AppError("Usuario não encontrado");
    }

    const userWithUpdateEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
      throw new AppError("Este email ja está em uso");
    }
    if (password && !old_password) {
      throw new AppError(
        "Você precisa informa a senha antiga para definir a nova senha"
      );
    }
    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError("Senha antiga não confere");
      }

      user.password = await hash(password, 8);
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    await database.run(
      `
        UPDATE users SET
        name = ?,
        email = ?,
        password = ?,
        update_at = DATETIME('now')
        where id = ?
        `,
      [user.name, user.email, user.password, user_id]
    );

    return response.status(200).json();
  }
}

module.exports = UsersControllers;
