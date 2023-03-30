const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersControllers = require("../controllers/UsersControllers");
const UserAvatarController = require("../controllers/UserAvatarController");

const userRoutes = Router();
const ensureAuthenticate = require("../middleware/ensureAuthenticate");

const userController = new UsersControllers();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig.MULTER);

userRoutes.post("/", userController.create);
userRoutes.put("/", ensureAuthenticate, userController.update);
userRoutes.patch(
  "/avatar",
  ensureAuthenticate,
  upload.single("avatar"),
  userAvatarController.update
);

module.exports = userRoutes;
