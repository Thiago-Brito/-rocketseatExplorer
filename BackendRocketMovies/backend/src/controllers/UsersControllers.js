const AppErro = require("../utils/AppErro");
const sqliteConnection = require("../database/sqlite");
const { hash, compare } = require("bcryptjs");

class UsersControllers {
  async create(request, response) {
    const { name, email, password } = request.body;
    const database = await sqliteConnection();

    const userWithUpdateEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );
    if (userWithUpdateEmail) {
      throw new AppErro("Este E-mail ja esta em uso");
    }

    if (!name) {
      throw new AppErro("nome é obrigatorio");
    }

    const hashedPassoword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?,?,?)",
      [name, email, hashedPassoword]
    );

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, oldPassword, newPassword } = request.body;
    const user_id = request.user.id;

    const database = await sqliteConnection();

    const user = await database.get("SELECT * FROM users WHERE id = (?)", [
      user_id,
    ]);

    if (!user) {
      throw new AppErro("Usuario não encontrado");
    }

    const userWithUpdateEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
      throw new AppErro("Este email ja está em uso");
    }

    if (newPassword && !oldPassword) {
      throw new AppErro(
        "Você precisa informa a senha antiga para definir a nova senha"
      );
    }

    if (newPassword && oldPassword) {
      const checkOldPassword = await compare(oldPassword, user.password);

      if (!checkOldPassword) {
        throw new AppErro("Senha antiga não confere");
      }

      user.password = await hash(newPassword, 8);
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

  async show(request, response) {
    const { id } = request.params;
    const database = await sqliteConnection();

    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    return response.json(user);
  }
}

module.exports = UsersControllers;
