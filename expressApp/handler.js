const serverless = require("serverless-http")
const app = require("./src/app")

module.exports.expressApp = async(event, context) => {
    serverless(app)

    return
}       