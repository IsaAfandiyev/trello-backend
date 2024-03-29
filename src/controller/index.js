module.exports = class Controller {
  constructor(service) {
    this.service = service;
  }

  // get boards
  async getBoards(req, res) {
    const boards = await this.service.getBoards(res.locals.user.uid);
    res.json(boards);
  }

  // get board by id
  async getBoard(req, res) {
    const board = await this.service.getBoard(
      res.locals.user.uid,
      req.params.id
    );
    res.json(board);
  }

  // create board
  async createBoard(req, res) {
    const id = await this.service.createBoard(res.locals.user.uid, req.body);
    res.json({ id });
  }

  // update board
  async updateBoard(req, res) {
    await this.service.updateBoard(
      res.locals.user.uid,
      req.params.id,
      req.body
    );
    res.json({ id: req.params.id });
  }

  // delete board
  async deleteBoard(req, res) {
    await this.service.deleteBoard(res.locals.user.uid, req.params.id);
    res.json({ id: req.params.id });
  }

  // get lists
  async getLists(req, res) {
    const lists = await this.service.getLists(res.locals.user.uid);
    res.json(lists);
  }

  // get list by id
  async getList(req, res) {
    const list = await this.service.getList(res.locals.user.uid, req.params.id);
    res.json(list);
  }

  // get all lists of a board
  async getListsByBoardId(req, res) {
    const lists = await this.service.getListsByBoardId(
      res.locals.user.uid,
      req.params.id
    );
    res.json(lists);
  }

  // create list
  async createList(req, res) {
    const id = await this.service.createList(res.locals.user.uid, req.body);
    res.json({ id });
  }

  // update list
  async updateList(req, res) {
    await this.service.updateList(res.locals.user.uid, req.params.id, req.body);
    res.json({ id: req.params.id });
  }

  // delete list
  async deleteList(req, res) {
    await this.service.deleteList(res.locals.user.uid, req.params.id);
    res.json({ id: req.params.id });
  }
};
