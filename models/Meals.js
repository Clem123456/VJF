var mongoose = require('mongoose');


var mealsSchema = mongoose.Schema({

    name: String,
    restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }],
    price: Number,
    ingredients: [{ type: String }],
    regimeAlim: [{ type: String }],
    mood: String
});

var mealsModel = mongoose.model('Meals', mealsSchema);

module.exports = mealsModel;