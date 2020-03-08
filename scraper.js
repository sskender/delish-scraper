const axios = require('axios');
const cheerio = require('cheerio');


/**
 * Scrape all recipe data from
 * full url path on delish page.
 *
 * @param {*} url full url path
 */
async function scrapeRecipe(url) {

    const res = await axios.get(url);
    const html = res.data;

    const $ = cheerio.load(html);


    // scrape directions
    let directionsRaw = $('.direction-lists').find('li');

    let cheerioDirectionsList = directionsRaw.map((i, li) => {
        return $(li).text().trim();
    });

    let directionsList = cheerioDirectionsList.get();


    // scrape ingredients
    let ingredientsRaw = $('.ingredient-item');

    let cheerioIngredientsList = ingredientsRaw.map((i, div) => {
        let ingredient = $(div).text()
            .trim()
            .replace(/\t|\n/g, '')
            .trim();
        return ingredient;
    });

    let ingredientsList = cheerioIngredientsList.get();


    // scrape prep time
    let prepTimeRaw = $('.total-time-amount');
    let prepTimeList = prepTimeRaw.text()
        .trim()
        .replace(/\t| /g, '')                       // tabs and spaces
        .replace(/[\n]+/g, '\n')                    // multiple new lines
        .trim().split('\n');                        // make an array

    let hours = Number(prepTimeList[prepTimeList.indexOf('hours') - 1]);
    let mins = Number(prepTimeList[prepTimeList.indexOf('mins') - 1]);


    // scrape servings
    let servingsRaw = $('.yields-amount');
    let servingsString = servingsRaw.text()
        .trim()
        .replace(/\t|\n|[^0-9]/g, '')
        .trim();

    let servings = Number(servingsString);


    // scrape image url
    let pictureRaw = $('picture');
    let source = pictureRaw.children().first();
    let sourceUrl = source.attr('data-srcset');
    let imageUrl = sourceUrl.substring(0, sourceUrl.indexOf('?'));


    // scrape recipe title
    let headingRaw = $('.content-header-inner > h1');
    let title = headingRaw.text();


    // result
    return {
        originUrl: url,
        title: title,
        image: imageUrl,
        servings: servings,
        prepTime: {
            hours: hours,
            minutes: mins
        },
        ingredients: ingredientsList,
        directions: directionsList
    };

}


exports.scrapeRecipe = scrapeRecipe;