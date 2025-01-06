const CategoryModel = require("../models/categoy.model");
const { body } = require('express-validator');

const CategoryController = {

    async categoryExists(req, res) {
        try {
            const { name } = req.params;
            const category = await CategoryModel.findOne({ name });
            if (category) {
                res.send({
                    flag: 0
                })
            } else {
                res.send({
                    flag: 1
                })
            }
        } catch (error) {
            res.send({
                message: "Internal server error",
                flag: 0
            })
        }
    },
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
                const categories = await CategoryModel.find({ deletedAt: null }).sort({ createdAt: -1 });
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
    async readTrashed(req, res) {
        try {
            const categories = await CategoryModel.find({ deletedAt: { $ne: null } }).sort({ deletedAt: -1 });
            res.send({
                flag: 1,
                categories
            })
        } catch (error) {
            res.send({
                message: "Internal server error",
                error: error.message,
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
        try {
            const { id } = req.params;
            CategoryModel.deleteOne({ _id: id })
                .then(
                    () => {
                        res.send({ message: "Category deleted", flag: 1 });
                    }
                ).catch(
                    () => {
                        res.send({ message: "Unable to delete category", flag: 0 });
                    }
                )
        } catch (error) {
            res.send({ message: "Internal server error", flag: 0 });
        }
    },
    async update(req, res) {
        try {
            const data = req.body;
            const { id } = req.params;
            const category = await CategoryModel.findByIdAndUpdate({ _id: id }, { name: data.name, slug: data.slug });
            if (category) {
                res.send({ message: "Category updated", flag: 1 });
            } else {
                res.send({ message: "Category not found", flag: 0 });
            }
        } catch (error) {
            res.send({ message: "Interval server error", flag: 0 });
        }
    },
    async toggleStatus(req, res) {
        try {
            const { id, new_status } = req.params;
            await CategoryModel.updateOne(
                {
                    _id: id
                },
                {
                    status: new_status
                }
            )
            res.send({
                message: "Status changed",
                flag: 1
            })
        } catch (error) {
            res.send({
                message: "Internal server error",
                error: error.message,
                flag: 0
            })
        }
    },
    async moveToTrash(req, res) {
        try {
            const { id } = req.params;
            await CategoryModel.updateOne(
                { _id: id },
                {
                    deletedAt: new Date().toISOString()
                }
            );
            res.send({
                message: "Moved to trash",
                flag: 1
            })
        } catch (error) {
            res.send({
                message: "Internal server error",
                flag: 0
            })
        }
    },
    async restore(req, res) {
        try {
            const { id } = req.params;
            CategoryModel.updateOne({ _id: id }, { deletedAt: null })
                .then(
                    () => {
                        res.send({ message: "Category restored", flag: 1 });
                    }
                ).catch(
                    () => {
                        res.send({ message: "Unable to restore category", flag: 0 });
                    }
                )
        } catch (error) {

        }
    }
}

module.exports = CategoryController;