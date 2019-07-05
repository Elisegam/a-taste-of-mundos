const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");

const recipeModel = require("../models/Recipe.js");

/* GET home page */
router.get("/", (req, res, next) => {
  // return console.log("yehooo");
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

/* GET see-more page */
router.get("/see-more/:_id", (req, res, next) => {
  recipeModel
    .findById(req.params._id)
    .populate("region")
    .then(recipe => {
      console.log(recipe);

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
