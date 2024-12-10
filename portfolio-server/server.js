require("dotenv").config();
const express = require("express");
const PORTFOLIO_APP = express();
const http = require("http");
const cors = require("cors");
const router = require("./mainRouter.js");


//BACKEND [ APP PORT NUMBER, SUB DIRECTORY ] FETCHING FROM ENV FILE
const PORT = process.env.PORT || 5000;
const APP_SUBDIRECTORY = process.env.PORTFOLIO_APP_BACKEND_SUBDIRECTORY;

PORTFOLIO_APP.use(cors());
PORTFOLIO_APP.options("*", cors());
PORTFOLIO_APP.use(`/${APP_SUBDIRECTORY}`,router());

const PORTFOLIO_APP_SERVER = http.createServer(PORTFOLIO_APP);

PORTFOLIO_APP_SERVER.listen(PORT, () => {
  console.log(`Server is up and listening on ${PORT}`);
});