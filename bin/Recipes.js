const mongoose = require("mongoose");
const recipeModel = require("../models/Recipe");

const dbName = "a-taste-of-the-world";
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

const recipes = [
  // {
  //   name: "Cookie",
  //   region: "United States of America",
  //   description: "Delicious cookies",
  //   ingredients: [
  //     "1 cup salted butter softened",
  //     "1 cup white (granulated) sugar",
  //     "1 cup light brown sugar packed",
  //     "2 tsp pure vanilla extract",
  //     "2 large eggs",
  //     "3 cups all-purpose flour",
  //     "1 tsp baking soda",
  //     "½ tsp baking powder"
  //   ],
  //   image:
  //     "https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg"
  // },
  {
    name: "Bibimbap",
    region: "South-Korea",
    description: "Korean rice and legumes",
    ingredients: [
      "Riz",
      "2 carottes",
      "2 courgettes",
      "200 g de pousses de soja",
      "Jeunes pousses d'épinard",
      "Champignons shiitakés ou de Paris",
      "2 ou 3 gousses d'ail",
      "1 morceau de gingembre râpé"
    ],
    image:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjNipa0jpvjAhXB8-AKHa2ODLkQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBibimbap&psig=AOvVaw1Hhwutk94-LCbt-qVmeNa8&ust=1562324489134668"
  }
];

recipeModel.create(recipes, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${recipes.length} recipes`);
  mongoose.connection.close();
});
