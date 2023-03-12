const { getAuth } = require("firebase-admin/auth");
const authenticate = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //split the space at the bearer
    const bearer = bearerHeader.split(" ");
    //Get token from string
    const bearerToken = bearer[1];

    //set the token
    req.token = bearerToken;

    try {
      res.locals.user = await getAuth().verifyIdToken(bearerToken);
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send({ message: "nonono" });
    }
  } else {
    //Fobidden
    res.sendStatus(401);
  }
};
module.exports = { authenticate };
