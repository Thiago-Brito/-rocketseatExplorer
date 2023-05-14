const knex = require("../database/knex");
const AppErro = require("../utils/AppErro");

class NotesController {
  async create(request, response) {
    const { title, description, tags, rating } = request.body;

    const user_id = request.user.id;

    const notesWithSameTitle = await knex
      .select()
      .from("notes")
      .whereRaw("LOWER(title) = ?", title.toLowerCase());

    if (notesWithSameTitle.length > 0) {
      throw new AppErro("Esse título já está em uso.");
    }

    const [note_id] = await knex("notes").insert({
      title,
      description,
      user_id,
      rating,
    });

    const tagsInsert = tags.map((name) => {
      return {
        note_id,
        user_id,
        name,
      };
    });

    await knex("tags").insert(tagsInsert);

    response.json();
  }

  async index(request, response) {
    const { title } = request.query;
    let notes;

    if (title) {
      notes = await knex
        .select()
        .from("notes")
        .whereRaw("LOWER(title) LIKE ?", `%${title.toLowerCase()}%`)
        .orderBy("title");
    } else {
      notes = await knex.select().from("notes").orderBy("title");
    }

    const notesWithTags = await Promise.all(
      notes.map(async (note) => {
        const noteTags = await knex
          .select()
          .from("tags")
          .where({ note_id: note.id });
        return {
          ...note,
          tags: noteTags,
        };
      })
    );

    return response.json(notesWithTags);
  }

  async show(request, response) {
    const { id } = request.params;
    const notes = await knex.select().from("notes").where({ id });
    const tags = await knex
      .select()
      .from("tags")
      .whereRaw("note_id LIKE ?", `${id}`)
      .orderBy("note_id");

    return response.json({ notes, tags });
  }
}

module.exports = NotesController;
