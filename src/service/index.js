module.exports = class Service {
  // constructor receives repository object
  constructor(repository) {
    this.repository = repository;
  }

  // get boards
  async getBoards(user_id) {
    return this.repository.getAll("boards", user_id);
  }

  // get board by id
  async getBoard(user_id, id) {
    return this.repository.get("boards", user_id, id);
  }

  // create board
  async createBoard(user_id, data) {
    return this.repository.create("boards", user_id, data);
  }

  // update board
  async updateBoard(user_id, id, data) {
    await this.repository.update("boards", user_id, id, data);
  }

  // delete board
  async deleteBoard(user_id, id) {
    await this.repository.delete("boards", user_id, id);
  }

  // get lists
  async getLists(user_id) {
    return this.repository.getAll("lists", user_id);
  }

  // get list by id
  async getList(user_id, id) {
    return this.repository.get("lists", user_id, id);
  }

  // get all lists of a board
  async getListsByBoardId(user_id, board_id) {
    return this.repository.getBy("lists", user_id, [
      {
        field: "board_id",
        operator: "==",
        value: board_id,
      },
    ]);
  }

  // get all cards of a list
  async getCardsByListId(user_id, list_id) {
    return this.repository.getBy("cards", user_id, [
      {
        field: "list_id",
        operator: "==",
        value: list_id,
      },
    ]);
  }

  // create list
  async createList(user_id, data) {
    return this.repository.create("lists", user_id, data);
  }

  // update list
  async updateList(user_id, id, data) {
    await this.repository.update("lists", user_id, id, data);
  }

  // delete list
  async deleteList(user_id, id) {
    await this.repository.delete("lists", user_id, id);
  }

  // get cards
  async getCards(user_id) {
    return this.repository.getAll("cards", user_id);
  }

  // get card by id
  async getCard(user_id, id) {
    return this.repository.get("cards", user_id, id);
  }

  // create card
  async createCard(user_id, data) {
    return this.repository.create("cards", user_id, data);
  }

  // update card
  async updateCard(user_id, id, data) {
    await this.repository.update("cards", user_id, id, data);
  }

  // delete card
  async deleteCard(user_id, id) {
    await this.repository.delete("cards", user_id, id);
  }
};
