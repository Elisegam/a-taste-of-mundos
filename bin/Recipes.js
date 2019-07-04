const mongoose = require("mongoose");
const Recipe = require("../models/Recipe");

const dbName = "a-taste-of-the-world";
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

const recipes = [
  {
    name: "Cookie",
    region: "America",
    description: "Delicious cookies",
    ingrédients: [
      "1 cup salted butter softened",
      "1 cup white (granulated) sugar",
      "1 cup light brown sugar packed",
      "2 tsp pure vanilla extract",
      "2 large eggs",
      "3 cups all-purpose flour",
      "1 tsp baking soda",
      "½ tsp baking powder"
    ],
    image:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjhou-cjpvjAhWSMBQKHYTIDqAQjRx6BAgBEAU&url=https%3A%2F%2Fcuisine.journaldesfemmes.fr%2Frecette%2F310548-american-cookies&psig=AOvVaw1XbF1ux9OAXkq1Lq1BQ-Hv&ust=1562324442016491"
  },
  {
    name: "Bibimbap",
    region: "Asia/South-Korea",
    description: "Korean rice and legumes",
    ingrédients: [
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

Recipe.create(recipes, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${recipes.length} recipes`);
  mongoose.connection.close();
});
