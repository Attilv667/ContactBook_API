const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    nom:{
        type: String,
        required: [true, 'Entrez un nom svp'],
    },
    prenom: {
        type: String,
        // Pas nécaessaire car par défaut l'option est sur False. required: false,
    },
    telephone: {
        type: String,
        required: [true, 'Entrez un numéro de téléphone svp'],  
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Entrez une adresse mail valide svp'],
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        // default: 
        required: [true, 'Entrez une catégorie svp'],
    },    
},
{timestamps: true} // L'option `timestamps` est ici en dehors des champs du schéma
);
const contactModel = mongoose.model('Contact', contactSchema);
module.exports = contactModel;