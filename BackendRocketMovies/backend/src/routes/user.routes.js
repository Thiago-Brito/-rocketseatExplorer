const { Router, request } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/updload");

const userRoutes = Router();
const UsersControllers = require("../controllers/UsersControllers");
const UsersAvatarController = require("../controllers/UsersAvatarController");

const updload = multer(uploadConfig.MULTER);

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userController = new UsersControllers();
const usersAvatarController = new UsersAvatarController();

userRoutes.post("/", userController.create);
userRoutes.put("/", ensureAuthenticated, userController.update);
userRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  updload.single("avatar"),
  usersAvatarController.update
);
userRoutes.get("/:id", ensureAuthenticated, userController.show);

module.exports = userRoutes;
