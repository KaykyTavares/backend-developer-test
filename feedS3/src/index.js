const s3FileController = require("./controller/s3FileController")

s3FileController().then(() => {
    console.log("EXECUTADO")
})