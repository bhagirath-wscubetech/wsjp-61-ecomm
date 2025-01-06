const { getRandomFileName } = require("../helper");
const ProductModel = require("../models/product.model");

const ProductController = {
    async uploadOtherImages(req, res) {
        try {
            const other_images = req.files.other_images;
            const { product_id } = req.params;
            console.log(product_id);
            console.log(other_images);
            res.send("Hello");
        } catch (error) {

        }
    },
    async read(req, res) {
        try {
            const { id } = req.params;
            if (id) {
                const product = await ProductModel.findById(id);
                res.send({ product, flag: 1 });
            } else {
                const products = await ProductModel.find().populate(['category', 'colors']);
                res.send({ products, flag: 1 });
            }
        } catch (error) {
            res.send({ message: "Internal server error", flag: 0 });
        }
    },
    create(req, res) {
        try {
            const image = req.files.image;
            const data = {
                name: req.body.name,
                slug: req.body.slug,
                category: req.body.category,
                colors: JSON.parse(req.body.colors),
                original_price: req.body.original_price,
                discounted_price: req.body.discounted_price,
                discount_percentage: req.body.discount_percentage,
            }

            const file_name = getRandomFileName(image.name);
            const destination = "./public/images/product/" + file_name;
            image.mv(
                destination,
                (err) => {
                    if (err) {
                        res.send({ flag: 0, message: "Something went wrong" });
                    } else {
                        data.main_image = file_name;
                        const product = new ProductModel(data);
                        product.save()
                            .then(
                                () => {
                                    res.send({ flag: 1, message: "Product created" });
                                }
                            ).catch(
                                (err) => {
                                    console.log(err.message);
                                    res.send({ flag: 0, message: "Unable to create product" });
                                }
                            )
                    }
                }
            )
        } catch (err) {
            console.log(err.message);
            res.send({ flag: 0, message: "Internal server error" });
        }
    }
}

module.exports = ProductController;