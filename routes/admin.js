const express = require("express");
const router = new express.Router();
const guardRoute = require("./../utils/route-guard");
// router.use((req, res, next) => {
//   if (req.session.currentUser) {
//     return console.log("c'est là");
//     next();
//   } else {
//     // return console.log("c'est ici");
//     if (req.url !== "/login" || req.url !== "/signup") res.redirect("/login");
//     else next();
//   }
// });

//MODEL
const recipeModel = require("../models/Recipe");
const uploader = require("./../config/cloudinary");
const countryModel = require("../models/Country");

/* GET see-more */
router.get("/see-more", (req, res, next) => {
  res.render("see-more");
});

/* GET add recipe page */
router.get("/add-recipies", guardRoute, (req, res) => {
  countryModel
    .find()
    .then(country => {
      res.render("add-recipies", { country });
    })
    .catch(e => console.log(e));
});

router.post("/add-recipe", guardRoute, uploader.single("image"), (req, res) => {
  // return console.log(req.body);
  // return console.log("ici", req.body);

  const { name, region, description, ingredients } = req.body;

  const newRecipe = {
    name,
    region,
    description,
    ingredients
  };

  if (req.file) newRecipe.image = req.file.secure_url;

  recipeModel
    .create(newRecipe)
    .then(recipe => {
      // console.log("yes", recipe.name);
      res.redirect("/manage-recipies");
      // res.render("user_page", { recipe });
    })
    .catch(err => {
      res.redirect("/");
    });
});

// router.post("/see-more"(req,res)=>{
//   const{user,comment}=req.body;
//   Comment.create()
// })

<<<<<<< HEAD
/* GET Manage recipies */
router.get("/manage-recipies", guardRoute, (req, res, next) => {
=======
router.get("/recipe-edit", (req, res) => {
  res.render("recipe_edit");
});
//  EDIT recipes
router.post("/recipe-edit/:id", (req, res) => {
>>>>>>> e9dd6ecd4c1e922bf76c84dd50efc164c3abad8f
  recipeModel
    .find()
    .populate("region")
    .then(recipe => {
<<<<<<< HEAD
      res.render("manage-recipies", { recipe });
=======
      res.render("recipe_edit", { recipe });
    })
    .catch(err => {
      res.redirect("/manage-recipes");
>>>>>>> e9dd6ecd4c1e922bf76c84dd50efc164c3abad8f
    });
});

//  EDIT recipes
// router.post("/recipe-edit/:id", (req, res) => {
//   recipeModel
//     .findById(req.params.id)
//     .then(recipe => {
//       res.render("recipe-edit", { recipe });
//     })
//     .catch(err => {
//       res.redirect("/manage-recipes");
//     });
// });

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
router.get("/recipe-delete/:id", guardRoute, (req, res) => {
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
