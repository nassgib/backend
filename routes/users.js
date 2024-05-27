const usersRouter = require("express").Router(); 

const {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
    checkEmptyNameAndEmail,
    checkEmptyNameAndEmailAndPassword,
    checkIsUserExists,
    hashPassword,
  } = require('../middlewares/user');
const {
    sendAllUsers,
    sendUserById,
    sendUserCreated,
    sendUserUpdated,
    sendUserDeleted,
    sendMe,
  } = require('../controllers/user');
  const { checkAuth } = require("../middlewares/auth");

usersRouter.get("/users", findAllUsers, sendAllUsers);

usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.post("/users", findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkAuth, hashPassword, createUser, sendUserCreated);

usersRouter.put("/users/:id", checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated);

usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;