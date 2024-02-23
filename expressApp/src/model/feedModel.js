const awsS3Service = require("../services/awsS3Service") 

async function getJob() {
    try {
        const response = await awsS3Service.getFile()

        return response
    } catch (error) {
        console.log(error)

        return false
    }
}

module.exports = {
    getJob
}