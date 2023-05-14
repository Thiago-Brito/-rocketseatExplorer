const { Router } = require("express");

const userRoutes = require("./user.routes");
const notesRoutes = require("./notes.routes");
const sessionRoutes = require("./session.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/notes", notesRoutes);
routes.use("/sessions", sessionRoutes);

module.exports = routes;
