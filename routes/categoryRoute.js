const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.route("/")
    .post(
        //categoryValidator.validateCategoryCreate,
        categoryController.createCategory)
    .get(categoryController.getCategories);

router.route("/:id")
    .get(
        //categoryValidator.validateCategoryGet,
        categoryController.getCategory)
    .delete(
        //categoryValidator.validateCategoryDelete,
        categoryController.deleteCategory)
    .put(
        //categoryValidator.validateCategoryUpdate,
        categoryController.updateCategory);
        
module.exports = router;