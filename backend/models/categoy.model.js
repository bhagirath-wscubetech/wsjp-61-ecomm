const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }, // Men's Shoes, Women's Jeans
        slug: {
            type: String,
            required: true,
            unique: true
        }, // mens-shoes, womens-jeans
        status: {
            type: Boolean,
            default: true
        },
        deletedAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
)

const CategoryModel = mongoose.model('Category', categorySchema);
module.exports = CategoryModel;