const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * Mongo schema for recipe document.
 */
const recipeSchema = new Schema({
    originUrl: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    image: {
        type: String
    },
    servings: {
        type: Number,
        required: true,
        min: 1
    },
    prepTime: {
        hours: {
            type: Number,
            required: true,
            min: 0
        },
        minutes: {
            type: Number,
            required: true,
            min: 1
        }
    },
    ingredients: {
        type: [String],
        required: true,
        index: true
    },
    directions: {
        type: [String],
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;