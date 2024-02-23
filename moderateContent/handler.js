const moderateContentController = require("./src/controller/moderateContentController")


module.exports.moderateContent = async(event, context) => {
    await event.Records.map(async (message) => await moderateContentController(message.body) )

    return
}       