const CategoryModel = require("../models/categoy.model");
const { body } = require('express-validator');

const CategoryController = {
    async read(req, res) {
        try {
            const { id } = req.params;
            if (id) {
                const category = await CategoryModel.findById(id);
                res.send({
                    flag: 1,
                    category
                })
            } else {
                const categories = await CategoryModel.find().sort({ createdAt: -1 });
                res.send({
                    flag: 1,
                    categories
                })
            }
        } catch (error) {
            res.send({
                message: "Internal server error",
                flag: 0
            })
        }
    },
    async create(req, res) {
        try {
            // body("name").isEmpty().message("Please enter the name");
            // body("slug").isEmpty().message("Please enter the slug");
            const { name, slug } = req.body;
            const categoryExists = await CategoryModel.findOne({ name: name });
            if (categoryExists) {
                res.send({
                    message: "Category name already exists",
                    flag: 0
                })
            } else {
                const category = new CategoryModel({ name, slug });
                category.save()
                    .then(
                        (success) => {
                            res.send({
                                message: "Category created",
                                flag: 1
                            })
                        }
                    )
                    .catch(
                        (error) => {
                            res.send({
                                message: "Unable to create category",
                                flag: 0
                            })
                        }
                    )
            }
        } catch (error) {
            console.log(error.message);
            res.send({
                message: "Internal server error",
                flag: 0
            })
        }
    },
    delete(req, res) {

    },
    update(req, res) {

    },
    toggleStatus(req, res) {

    },
    moveToTrash(req, res) {

    }
}

module.exports = CategoryController;