// adding mongoose to this file
const mongoose = require('mongoose');

// Initiating a connection to the database
mongoose.connect('mongodb+srv://recipes:12345@recipe-app.cphqs.mongodb.net/recipe-app?retryWrites=true&w=majority', { useNewUrlParser: true }); 
    
// Connecting to the database
const connect = mongoose.connection;

// Create a Schema or db structure
let recipeSchema = new mongoose.Schema({
    title: String,
    image: String,
    duration: String,
    steps: String,
    rating: Number
});

// Create a model/ collection
const recipes = mongoose.model('recipes', recipeSchema);


// Export the connection and the model
module.exports.connect = connect;
module.exports.recipes = recipes;


