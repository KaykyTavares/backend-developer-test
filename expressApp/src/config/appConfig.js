const router = require("../routes/routes")
const express = require("express")

// function to configure express app
function appConfig(app) {
    app.use(express.json(), router)
    
    return
}

module.exports = appConfig