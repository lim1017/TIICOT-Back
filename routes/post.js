const router = require("express").Router();
const axios = require('axios');


module.exports = () => {
  router.get("/posts", (req, res, next) => {

    let sortBy
    let direction

    let tags= req.query.tags.split(",")

    console.log(tags)
    req.query.sortBy ? sortBy= req.query.sortBy : sortBy="id"
    req.query.direction ? direction= req.query.direction : direction="asc"



    const axiosArr = tags.map((tag) =>{
      console.log(tag)
      console.log(sortBy)
      axios.get(`https://hatchways.io/api/assessment/blog/posts/?tag=${tag}&sortBy=${sortBy}&direction=${direction}`)
    })


    axios.all(axiosArr)
    .then(axios.spread((...res) => {
      // all requests are now complete
      res.map(d => console.log(d))
    }))
    .catch(error=>{
      console.log(error)
    })


   

  });

  return router;
};
