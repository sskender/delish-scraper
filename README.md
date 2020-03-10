# delish-scraper
Scrape recipes from www.delish.com


### Scrape recipe from url and get JSON back:
```javascript
const scraper = require('./scraper');

// delish recipe url
const url = 'https://www.delish.com/cooking/recipe-ideas/recipes/a52422/brunch-punch-recipe/';

scraper.scrapeRecipe(url)
    .then((recipe) => {
        console.log(recipe);
    }) ...
```

Response:
```json
{
  originUrl: 'https://www.delish.com/cooking/recipe-ideas/recipes/a52422/brunch-punch-recipe/',
  title: 'Brunch Punch',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-191017-brunch-punch-0211-landscape-pf-1583527183.jpg',
  servings: 25,
  prepTime: { hours: 0, minutes: 10 },
  ingredients: [
    'ice',
    '2 liter sprite',
    '2 c.orange juice',
    '2 c.pineapple juice',
    '2 c.vodka',
    '1 bottle prosecco',
    '2 c.Strawberries, sliced',
    '2 c.raspberries',
    '1 c.Fresh mint leaves, plus more for garnish',
    'Sanding sugars, for rims'
  ],
  directions: [
    'To a large punch bowl, add ice, Sprite, orange juice, pineapple juice, vodka, Prosecco, strawberries, raspberries and mint leaves and stir to combine.',
    'In a small dish of sanding sugar, rim glasses with fresh strawberry and coat rims with sugar. Ladle punch into glasses and garnish with more mint.'
  ]
}
```


### Scrape recipe from url and get Mongo schema back:
```javascript
const scraper = require('./scraper');

// delish recipe url
const url = 'https://www.delish.com/cooking/recipe-ideas/recipes/a52422/brunch-punch-recipe/';

scraper.scrapeRecipeModel(url)
    .then((recipe) => {

        recipe.save((err, recipe) => {
            ...
        });

    }) ...

```

Response:
```json
{
  ingredients: [
    'ice',
    '2 liter sprite',
    '2 c.orange juice',
    '2 c.pineapple juice',
    '2 c.vodka',
    '1 bottle prosecco',
    '2 c.Strawberries, sliced',
    '2 c.raspberries',
    '1 c.Fresh mint leaves, plus more for garnish',
    'Sanding sugars, for rims'
  ],
  directions: [
    'To a large punch bowl, add ice, Sprite, orange juice, pineapple juice, vodka, Prosecco, strawberries, raspberries and mint leaves and stir to combine.',
    'In a small dish of sanding sugar, rim glasses with fresh strawberry and coat rims with sugar. Ladle punch into glasses and garnish with more mint.'
  ],
  _id: 5e679889f09efe0b71c70dc7,
  originUrl: 'https://www.delish.com/cooking/recipe-ideas/recipes/a52422/brunch-punch-recipe/',
  title: 'Brunch Punch',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-191017-brunch-punch-0211-landscape-pf-1583527183.jpg',
  servings: 25,
  prepTime: { hours: 0, minutes: 10 },
  created: 2020-03-10T13:39:21.599Z
}
```
