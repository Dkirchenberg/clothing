var express = require("express");

var router = express.Router();

var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
// sends us to the next get function instead. 
  res.redirect("/outfits");
});
// get route, edited to match sequelize
router.get("/outfits", function(req, res) {
  
  clothes.all(function(clothingData) {
    
    res.render("index", {clothing_data: clothingData});
  });
});

  db.Clothing.findAll({
    include: [db.Complete],
  })
  .then(function(dbClothing) {
    // into the main index, updating the page
      var clsObject = {
        outfits: dbClothing
      };
      return res.render("index", lsObject);
    });

// post route to create outfits
router.post("/complete/create", function(req, res) {
  
 db.Outfits.create({
    category: req.body.category
  })
    console.log(result);
    res.redirect("/");
  })
  .then(function(dbOutfits){
      console.log(dbOutfits);
      res.redirect("/");
    });

  // put route to add an outfit
// router.put("/complete/:id", function(req, res) {
//   if (req.body.complete) {
//     db.complete.create({
//       top_id: req.body.top_id,
//       bottom_id: req.body.bottom_id,
//       ClothesId: req.body.clothes_id
//     })
//     .then(function(dbComplete) {
//       return db.Clothes.update({
//         category: 
//       }, {
//         where: {
//           id: req.body.clothes_id
//         }
//       });
// })
// .then(function(dbClothes) {
//   res.json("/");
// })
// else {
//   db.Clothes.update({
//     complete: 
//   )}
//  }
//     where: {
//       id: req.body.top_id
//       id: req.body.top_i
//     }
//   })
//     .then(function(dbClothes) {
//       res.json("/");
//   });
// }
// });
module.exports = router;



    
 

