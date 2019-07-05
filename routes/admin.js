const express = require("express");
const router = new express.Router();

// router.use((req, res, next) => {
//   if (req.session.currentUser) {
//     next();
//   } else {
//     res.redirect("/login");
//   }
// });

//MODEL
const recipeModel = require("../models/Recipe");

/* GET see-more */
router.get("/see-more", (req, res, next) => {
  res.render("see-more");
});

/* GET add recipe page */
router.get("/add-recipies", (req, res, next) => {
  res.render("add-recipies");
});

router.post("/add-recipies", (req, res) => {
  const { name, region, description, ingredients, image } = req.body;
  recipeModel
    .create({
      name,
      region,
      description,
      ingredients,
      image
    })
    .then(recipe => {
      console.log("yes", recipe.name);
      res.redirect("/manage-recipies");
      res.render("user_page", { recipe });
    })
    .catch(err => {
      res.redirect("/");
    });
});

/* GET Manage recipies */
router.get("/manage-recipies", (req, res, next) => {
  recipeModel.find().then(recipe => {
    res.render("manage-recipies", { recipe });
  });
});

//  EDIT recipes
router.post("/recipe-edit/:id", (req, res) => {
  recipeModel
    .findById(req.params.id)
    .then(recipe => {
      res.render("recipe-edit", { recipe });
    })
    .catch(err => {
      res.redirect("/manage-recipes");
    });
});

router.post("/recipe-edit/:id", (req, res) => {
  recipeModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(recipe => {
      res.render("recipe_edit", { recipe });
      console.log(req);
    })
    .catch(err => {
      console.log("error");
    });
});

// DELETE recipes
router.get("/recipe-delete/:id", (req, res) => {
  recipeModel
    .findByIdAndDelete(req.params.id, req.body)
    .then(recipe => {
      res.redirect("/manage-recipies");
      console.log(req);
    })
    .catch(err => {
      console.log("error");
    });
});

//SHOW recipes
router.get("/result", (req, res) => {
  recipeModel.find();
  then(recipe => {
    res.render("user_page", { recipe });
  }).catch(err => {
    console.log("error");
  });
});

module.exports = router;
