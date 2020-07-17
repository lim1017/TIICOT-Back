const router = require("express").Router();

module.exports = () => {

  router.get("/ping", (req, res, next) => {
    res.status(200);
    res.json({
      "success": true
     });





  });

  return router;

};
