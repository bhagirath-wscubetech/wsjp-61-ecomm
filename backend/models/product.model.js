const mongoose = require('mongoose');
const CategoryModel = require('./categoy.model');
const ColorModel = require('./color.model');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 100,
            required: true,
            unique: true
        },
        slug: {
            type: String,
            maxLength: 100,
            required: true,
            unique: true
        },
        category: {
            type: mongoose.Schema.ObjectId,
            ref: CategoryModel
        },
        colors: [
            {
                type: mongoose.Schema.ObjectId,
                ref: ColorModel
            }
        ],
        original_price: {
            type: Number,
            required: true,
            min: 1
        },
        discounted_price: {
            type: Number,
            default: 0
        },
        discount_percentage: {
            type: String
        },
        stock: {
            type: Boolean,
            default: true
        },
        main_image: {
            type: String
        },
        other_images: [
            {
                type: String,
                default: null
            }
        ],
        description: {
            type: String
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)


const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;