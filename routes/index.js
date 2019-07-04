const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");

const Recipe = require("../models/Recipe");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/", (req, res, next) => {
  // console.log(req.body);
  const query = req.body.query;
  const regex = new RegExp(query, "i");
  Recipe.find({ Name: regex })
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
router.get("/see-more", (req, res, next) => {
  res.render("see-more");
});

/* GET home page */
router.get("/favourite-foods", (req, res, next) => {
  res.render("favourite-foods");
});
module.exports = router;

router.get("/result", (req, res, next) => {
  res.render("result");
});
