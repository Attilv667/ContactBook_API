const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.route("/")
    .post(
        //categoryValidator.validateCategoryCreate,
        contactController.createContact)
    .get(contactController.getContacts);

router.route("/:id")
    .get(
        //categoryValidator.validateCategoryGet,
        contactController.getContact)
    .delete(
        //categoryValidator.validateCategoryDelete,
        contactController.deleteContact)
    .put(
        //categoryValidator.validateCategoryUpdate,
        contactController.updateContact);
        
module.exports = router;