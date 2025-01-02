const mongoose = require('mongoose');

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
            ref: "Category"
        },
        colors: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "Color"
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
        stock: {
            type: Boolean,
            default: true
        },
        main_image: {
            type: String
        },
        other_images: [
            { type: String }
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