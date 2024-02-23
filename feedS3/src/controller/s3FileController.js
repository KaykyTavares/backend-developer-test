const jobsModel = require("../model/jobsModel")
const awsS3Service = require("../services/awsS3Service")

async function s3FileController() {
    try {
        const queryRes = await jobsModel.getjobs()

        if(typeof queryRes !== "object") {
            console.log("Something went wrong in doing the query")

            return
        }

        await awsS3Service.updateFile(queryRes)
        
        return
    } catch (error) {
        console.log(error)

        return false
    }
}

module.exports = s3FileController