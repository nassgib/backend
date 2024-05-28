const gamesRouter = require("express").Router();

const {
    findGameById,
    findAllGames,
    createGame,
    updateGame,
    deleteGame,
    checkEmptyFields,
    checkIsGameExists,
    checkIsVoteRequest,
  } = require('../middlewares/games');
const {
    sendAllGames,
    sendCreateGame,
    sendGameUpdated,
    sendGameDeleted,
    sendGameById,
  } = require('../controllers/games');

const { checkAuth } = require("../middlewares/auth");
const { checkIfCategoriesAvaliable } = require("../middlewares/category");
const { checkIfUsersAreSafe } = require("../middlewares/user");

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendCreateGame,
  );

  gamesRouter.get("/games/:id", findGameById, sendGameById);

  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
  );

gamesRouter.delete( "/games/:id", checkAuth, deleteGame, sendGameDeleted ); 

module.exports = gamesRouter;