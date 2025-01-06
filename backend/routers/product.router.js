const express = require('express');
const ProductController = require('../controllers/product.controller.js');
const fileUpload = require('express-fileupload');

const ProductRouter = express.Router();

// ProductRouter.get(
//     "/get-trashed", ProductController.readTrashed
// )
ProductRouter.get(
    "/:id?", ProductController.read
)
// ProductRouter.get(
//     "/category-exists/:name", ProductController.categoryExists
// )

ProductRouter.post(
    "/create",
    fileUpload({
        createParentPath: true
    }),
    ProductController.create
)
// ProductRouter.put(
//     "/update/:id", ProductController.update
// )
// ProductRouter.patch(
//     "/change-status/:id/:new_status", ProductController.toggleStatus
// )
// ProductRouter.patch(
//     "/restore/:id", ProductController.restore
// )
// ProductRouter.delete(
//     "/delete/:id", ProductController.delete
// )
// ProductRouter.delete(
//     "/move-to-trash/:id", ProductController.moveToTrash
// )

ProductRouter.post(
    "/upload-other-images/:product_id",
    fileUpload({
        createParentPath: true
    }),
    ProductController.uploadOtherImages
)


module.exports = ProductRouter;