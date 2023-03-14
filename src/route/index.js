const express = require("express");

const initializeRoutes = (controller) => {
  const router = express.Router();

  // boards
  router.get("/boards", controller.getBoards.bind(controller));
  router.get("/boards/:id", controller.getBoard.bind(controller));
  router.post("/boards", controller.createBoard.bind(controller));
  router.put("/boards/:id", controller.updateBoard.bind(controller));
  router.delete("/boards/:id", controller.deleteBoard.bind(controller));

  // lists
  router.get("/lists", controller.getLists.bind(controller));
  router.get("/lists/:id", controller.getList.bind(controller));
  router.get("/boards/:id/lists", controller.getListsByBoardId.bind(controller));
  router.get("/lists/:id/cards", controller.getCardsByListId.bind(controller));
  router.post("/lists", controller.createList.bind(controller));
  router.put("/lists/:id", controller.updateList.bind(controller));
  router.delete("/lists/:id", controller.deleteList.bind(controller));

  // cards
  router.get("/cards", controller.getCards.bind(controller));
  router.post("/cards", controller.createCard.bind(controller));
  router.get("/cards/:id", controller.getCard.bind(controller));
  router.put("/cards/:id", controller.updateCard.bind(controller));
  router.delete("/cards/:id", controller.deleteCard.bind(controller));

  return router;
};

module.exports = initializeRoutes;