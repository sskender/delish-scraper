const mongoose = require('mongoose');
const scraper = require('./scraper');


const url = 'https://www.delish.com/cooking/recipe-ideas/recipes/a52422/brunch-punch-recipe/';


// database
mongoose.connect('mongodb://localhost:27017/delish', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,});
const db = mongoose.connection;


// get scraped recipe object
scraper.scrapeRecipe(url)
    .then((recipe) => {
        console.log(recipe);
    })
    .catch((err) => {
        console.error(err);
    });


// get scraped recipe database model
scraper.scrapeRecipeModel(url)
    .then((recipe) => {
        console.log(recipe);

        recipe.save((err, recipe) => {
            if (err) {
                console.error(err);
            }
        });
    })
    .catch((err) => {
        console.error(err);
    });