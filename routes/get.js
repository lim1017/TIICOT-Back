const router = require("express").Router();

module.exports = () => {

  router.get("/get/students", (req, res, next) => {
    res.json([
      {FirstName: 'Joe',
       LastName:"Lee"    
      },
      {FirstName: 'Moe',
       LastName:"Well"    
      },
      {FirstName: 'Boe',
       LastName:"Bob"    
      },
      {FirstName: 'Woe',
       LastName:"Koo"    
      },
      {FirstName: 'Tom',
       LastName:"Lim"    
      },
      {FirstName: 'Tommy',
       LastName:"Lim"    
      },
      {FirstName: 'Bobby',
       LastName:"Mountain"    
      },
      {FirstName: 'Super',
       LastName:"Bob"    
      },
    ]);
  });

  return router;

};
