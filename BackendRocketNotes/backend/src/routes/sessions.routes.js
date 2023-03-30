const { Router } = require("express");

const SessionsControlller = require("../controllers/SessionsControlller");

const sessionsControlller = new SessionsControlller();

const sessionsRoutes = Router();

sessionsRoutes.post("/", sessionsControlller.create);

module.exports = sessionsRoutes;
