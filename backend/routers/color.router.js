const express = require('express');
const ColorController = require('../controllers/color.controller');

const ColorRouter = express.Router();

ColorRouter.get(
    "/:id?",
    ColorController.getData
)

module.exports = ColorRouter;