const Contact = require("../models/contactModel");
const asyncHandler = require("../middlewares/asyncHandler");
const apiResponse = require("../utils/apiResponse");

// @desc    Récupère tous les contacts
 // @route   GET /api/v1/contacts
 // @access  Public
exports.getContacts = asyncHandler(async (req, res, next) => {
    const contacts = await Contact.find().populate({
        path: "category",
        select: "name -_id",
    });
    return apiResponse.success("Contacts récupérés avec succès", contacts).send(res);
});

// @desc    Récupère un contact par son ID
 // @route   GET /api/v1/contacts/:id
 // @access  Public
exports.getContact = asyncHandler(async (req, res, next) => {
    const contactID = req.params.id;
    const contact = await Contact.findById(contactID).populate({
        path: "category",
        select: "name -_id",
    });;
    if (!contact) {
        return apiResponse.error("Contact non trouvé", 404).send(res);
    }
    return apiResponse.success("Contact récupéré avec succès", contact).send(res);
});

// @desc    Crée un contact
 // @route   POST /api/v1/contacts
 // @access  Public
exports.createContact = asyncHandler(async (req, res, next) => {
    const contact = await Contact.create(req.body);
    if (!contact) {
        return apiResponse.error("Impossible de créer le contact", 500).send(res);
    }
    return apiResponse.success("Contact créé avec succès", contact).send(res);
});

// @desc    Met à jour un contact via son ID
 // @route   PUT /api/v1/contacts/:id
 // @access  Public
exports.updateContact = asyncHandler(async (req, res, next) => {
    const contactID = req.params.id;
    const contact = await Contact.findByIdAndUpdate(contactID, req.body, {
        new:true,
        runValidators: true,
    });
    if (!contact) {
        return apiResponse.error("Contact non trouvé", 404).send(res);
    }
    return apiResponse.success("Contact mis à jour avec succès", contact).send(res);
});

// @desc Supprimer un contact via son ID
// @route DELETE /api/v1/contacts/:id
// @access Public
exports.deleteContact = asyncHandler(async (req, res, next) => {
    const contactID = req.params.id;
    const contact = await Contact.findByIdAndDelete(contactID);
    if (!contact) {
        return apiResponse.error("Contact non trouvé", 404).send(res);
    }
    return apiResponse.success("Contact supprimé avec succès", contact).send(res);
});