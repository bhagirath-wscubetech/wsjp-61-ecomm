const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 20,
            required: true,
            unique: true
        },
        code: {
            type: String,
            maxLength: 7,
            required: true,
            unique: true
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);


const ColorModel = mongoose.model("Color", ColorSchema);

module.exports = ColorModel;