const express = require("express")
const appConfig = require("./config/appConfig")
const envVars = require("./config/envVarsConfig")
const app = express()

appConfig(app)

app.listen(envVars.port, () => {
    console.info(`app up and runnig on http://localhost:${envVars.port}`)
})

module.exports = app