const { getRandomFileName } = require("../helper");
const ProductModel = require("../models/product.model");

const ProductController = {
    async uploadOtherImages(req, res) {
        try {
            const { product_id } = req.params; // product_id
            const other_images = req.files.other_images;
            const otherImagesNames = [];
            for (let otherImage of other_images) {
                const file_name = getRandomFileName(otherImage.name);
                const destination = "./public/images/product/other-images/" + file_name;
                await otherImage.mv(destination);
                otherImagesNames.push(file_name);
            }
            const product = await ProductModel.findById(product_id);
            const product_other_images = product.other_images;
            const updated_names = [...product_other_images, ...otherImagesNames];
            product.other_images = updated_names;
            await product.save();
            res.send({ flag: 1, message: "Images uploaded", other_images: updated_names });
        } catch (error) {
            res.send({ flag: 0, message: "Internal server error" });
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