const router = require("express").Router();

module.exports = () => {

  router.get("/urls", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
  });

  return router;

};
