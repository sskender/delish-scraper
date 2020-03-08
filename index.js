const scraper = require('./scraper');


const url = 'https://www.delish.com/cooking/recipe-ideas/recipes/a52422/brunch-punch-recipe/';


// get scraped recipe object
scraper.scrapeRecipe(url)
    .then((recipe) => {
        console.log(recipe);
    })
    .catch((err) => {
        console.error(err);
    });


// get scraped recipe database model