const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, "Ajouter un nom svp"],
        unique: [true, "Cette catégorie existe déjà"],
        trim: true,
        minlength: [2, "La catégorie doit avoir au minimum 2 caractères"],
        maxlength: [50, "La catégorie ne peut pas avoir plus de 50 caractères"]
    },
    description:{
        type: String,
        trim: true,
        minlength: [2, "La description doit avoir au minimum 2 caractères"],
        maxlength: [200, "La description ne peut pas avoir plus de 200 caractères"]
    }
},
    {timestamps: true}// L'option `timestamps` est ici en dehors des champs du schéma
);
// name: Nom du champ
// required: Caractère obligatoire
//timestamps: true: Ajoute des clés qui permet d'ajouter des dates à chaque évènement
module.exports = mongoose.model("Category", categorySchema)

// mongoose.Schema : Définit la structure des documents de la collection categories (dans ce cas, chaque document a un champ name et un champ description).
// mongoose.model() : Crée un modèle basé sur le schéma. Ici, nous créons le modèle Category qui représentera les documents de la collection categories dans MongoDB.
// Category est le modèle que tu peux utiliser pour interagir avec la collection categories dans ta base de données MongoDB.