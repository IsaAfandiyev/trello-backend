const { initializeApp } = require("firebase-admin/app");
const express = require("express");
const cors = require("cors");

const Repository = require("./src/repository");
const Service = require("./src/service");
const Controller = require("./src/controller");
const { authenticate } = require("./src/middleware");
const initializeRoutes = require("./src/route");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const repository = new Repository();
const service = new Service(repository);
const controller = new Controller(service);

const router = initializeRoutes(controller);

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(authenticate);
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/", router);

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`);
});
