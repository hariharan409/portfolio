const app = require("express").Router();
const chatBotRouter = require("./sub-router/chatBotRouter");

const routeCheck = () => {
    app.get("/", (_,res) => res.send({ response: "My portfolio API is ready to serve" }).status(200));
}

module.exports = () => {
    routeCheck();
    app.use("/chatbot",chatBotRouter());

    return app;
}