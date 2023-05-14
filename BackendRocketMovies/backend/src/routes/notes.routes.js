const { Router } = require("express");

const notesRoutes = Router();
const NotesControllers = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesController = new NotesControllers();

notesRoutes.post("/", ensureAuthenticated, notesController.create);
notesRoutes.get("/", ensureAuthenticated, notesController.index);
notesRoutes.get("/:id", ensureAuthenticated, notesController.show);

module.exports = notesRoutes;
