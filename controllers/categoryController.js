//Un controller est un ensemble des méthodes pour gérer un modèle
const Category = require("../models/categoryModel");
const asyncHandler = require("../middlewares/asyncHandler");
const ApiResponse = require("../utils/apiResponse");


// @desc    récupère toutes les catégories
// @route   GET /api/v1/categories
// @access  Public
exports.getCategories = asyncHandler(async (req, res, next) => {
    const categories = await Category.find(); 
    const categoryCount = await Category.countDocuments();
    return ApiResponse.success("Catégories récupérées avec succès",{
        Nombre: categoryCount,
        categories: categories
    }
    ).send(res);
    });

// @desc    récupère une seule catégorie
// @route   GET /api/v1/categories/:id
// @access Public
exports.getCategory = asyncHandler(async (req, res, next) => {
    const categoryID = req.params.id;
    const category = await Category.findById(categoryID);
    if (!category) {
    return ApiResponse.error("Catégorie non trouvée", 404).send(res);
}
    return ApiResponse.success("Catégorie récupérée avec succès",
        category
    ).send(res);
    });


// @desc    créer une catégorie
// @route   POST /api/v1/categories
// @access  Public
exports.createCategory = asyncHandler(async (req, res, next) => {
    const category = await Category.create(req.body);
    if (!category) {
    return ApiResponse.error("Categorie non créée", 400).send(res);
}
    return ApiResponse.success(
        "Categorie créée avec succès",
        category,
        201
    ).send(res);
});

// @desc    mettre à jour une catégorie
// @route   PUT /api/v1/categories/:id
// @access Private/Admin
exports.updateCategory = asyncHandler(async (req, res, next) => {
    const categoryID = req.params.id;
    const category = await Category.findByIdAndUpdate(categoryID, req.body, {
    new: true,
    runValidators: true,
    });
    if (!category) {
    return ApiResponse.error("Categorie non trouvée", 404).send(res);
}
    return ApiResponse.success(
        "Categorie mise à jour avec succès",
        category
    ).send(res);
    });

// @desc    supprimer une catégorie
// @route   DELETE /api/v1/categories/:id
// @access  Private/Admin
exports.deleteCategory = asyncHandler(async (req, res, next) => {
    const categoryID = req.params.id;
    const category = await Category.findByIdAndDelete(categoryID);
    if (!category) {
    return ApiResponse.error("Categorie non trouvée", 404).send(res);
}
    return ApiResponse.success("Categorie supprimée avec succès", null, 204).send(res);
    });