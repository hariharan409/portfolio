const app = require("express").Router();
const {googleBardPalm2Api} = require("../controller/chatbotController.js");

module.exports = () => {
    // < ------------- GET REQUEST ------------------ > //
    app.get("/google-bard-palm2-api",googleBardPalm2Api);

    // < ------------- POST REQUEST ------------------ > //
    
    return app;
}