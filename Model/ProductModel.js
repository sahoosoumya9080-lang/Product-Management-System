const mongoose = require('mongoose');

const productModelSchema = new mongoose.Schema({
    ProdName: {
        type: String,
        require: true,
        unique: true
    },
    ProdDescription: {
        type:String,
        require: true
    },
    ProdPrice: {
        type: Number,
        require: true
    }
});

const ProductModel = mongoose.model("ProductModel", productModelSchema)
module.exports = ProductModel;