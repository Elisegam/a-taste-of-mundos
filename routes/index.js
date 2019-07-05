const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");

const recipeModel = require("../models/Recipe.js");

// /* GET home page */
// router.get("/", (req, res, next) => {
//   var q = req.query.q;
//   Recipe.find(
//     {
//       $text: { $search: q }
//     },
//     {
//       _id: 0,
//       __v: 0
//     },
//     function(err, data) {
//       res.json(data);
//     }
//   )
//     .then(recipes => console.log(recipes))
//     .catch(e => console.log(e));
// });

// // Recipe.createIndex({
// //   Name: "text",
// //   Region: "text",
// //   image: "text"
// // });

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/result", (req, res, next) => {
  res.render("result");
});

router.post("/search-recipes", (req, res, next) => {
  // return console.log(req.body);
  const query = req.body.search;
  const regex = new RegExp(query, "i");
  recipeModel
    .find({ name: regex })
    .then(recipes => {
      res.send(recipes);
    })
    .catch(e => console.log(e));
});

// router.get("/search/resto", (req, res) => {
//   // console.log(req.query);
//   const regex = new RegExp(req.query.search, "i");
//   Restaurant.find({ name: regex })
//     .then(restos => {
//       console.log(restos);
//       res.json(restos);
//     })
//     .catch(err => console.error(err));
// });

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET see-more page */
router.get("/see-more/:_id", (req, res, next) => {
  recipeModel
    .findById(req.params._id)
    .then(recipe => {
      res.render("see-more", { recipe });
    })
    .catch(err => {
      console.log(error);
    });
});

/* GET favourite-foods */
router.get("/favourite-foods", (req, res, next) => {
  res.render("favourite-foods");
});

module.exports = router;
