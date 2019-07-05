const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");

<<<<<<< HEAD
const Recipe = require("../models/Recipe.js");
=======
const recipeModel = require("../models/Recipe");
>>>>>>> 080d7b693ce17d3311de709509c2b637bbd79724

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

router.get("/", (req, res, next) => {
  res.render("index");
});

<<<<<<< HEAD
router.get("/result", (req, res, next) => {
  res.render("result");
=======
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
<<<<<<< HEAD
=======
=======
>>>>>>> 9bd54dafb27cea82b67467deaddf33e5e2773183
router.get("/", (req, res, next) => {
  res.render("index");
>>>>>>> 080d7b693ce17d3311de709509c2b637bbd79724
});
/* GET see-moire page */
<<<<<<< HEAD
=======
>>>>>>> 2f631c4d36ba510a9d2cbdbb4895ed1bfb306b6d
>>>>>>> 4aedc54a1f700265fca53cf5d34ac5bb37d66c6c
>>>>>>> 080d7b693ce17d3311de709509c2b637bbd79724
router.get("/see-more", (req, res, next) => {
  res.render("see-more");
});

/* GET favourite-foods */
router.get("/favourite-foods", (req, res, next) => {
  res.render("favourite-foods");
});
module.exports = router;
