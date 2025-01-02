const ProductModel = require("../models/product.model");

const ProductController = {
    async read(req, res) {
        try {
            const { id } = req.params;
            if (id) {
                const product = await ProductModel.findById(id);
                res.send({ product, flag: 1 });
            } else {
                const products = await ProductModel.find();
                res.send({ products, flag: 1 });
            }
        } catch (error) {
            res.send({ message: "Internal server error", flag: 0 });
        }
    },
    create() {

    }
}

module.exports = ProductController;