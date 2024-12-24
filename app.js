const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./config/db");

// routes
const categoryRoute = require("./routes/categoryRoute");
const contactRoute = require("./routes/contactRoute");

// load env variables
dotenv.config({path: "./config/config.env"});

// Connect to database
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());

// Mount routers
app.use("/api/v1/categories", categoryRoute);
app.use("/api/v1/contacts", contactRoute);

// global management middleware error /middleware de gestion des erreurs
app.use(errorHandler);

module.exports = app;