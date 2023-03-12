const { initializeApp } = require("firebase-admin/app");
const express = require("express");
const cors = require("cors");

const Repository = require("./src/repository");
const Service = require("./src/service");
const Controller = require("./src/controller");
const { authenticate } = require("./src/middleware");
const initializeRoutes = require("./src/route");

initializeApp();

const repository = new Repository();
const service = new Service(repository);
const controller = new Controller(service);

const router = initializeRoutes(controller);

const app = express();

app.use(authenticate);
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.use("/", router);

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`);
});
