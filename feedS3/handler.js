const s3FileController = require("./src/controller/s3FileController")

module.exports.feedS3 = async(event, context) => {
    await s3FileController()

    return
}       