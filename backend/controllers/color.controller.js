const ColorModel = require("../models/color.model");

const ColorController = {
    async getData(req, res) {
        try {
            const { id } = req.params;
            if (id) {
                const color = await ColorModel.findById(id);
                res.send({ color, flag: 1 });
            } else {
                const colors = await ColorModel.find();
                res.send({ colors, flag: 1 });
            }
        } catch (error) {
            res.send({ message: "Internal server error", flag: 0 });
        }
    }
};

module.exports = ColorController;