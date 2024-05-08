const express = require("express");
const app = ex("/gadgets", (request, response) => {

    app.get("/gadgets", (request, response) => {
response.sendFile("./gadgets.html", { root: __dirname });
});
module.exports = app;