const { S3 } = require("@aws-sdk/client-s3")
const envVars = require("../config/envVarsConfig")

const s3 = new S3()

const params = {
    Bucket: envVars.s3BucketName,
    Key: envVars.s3FileName,
}

async function getFile() {
    try {
    const jobJson = await s3.getObject(params)
    const jobJsonString = await jobJson.Body?.transformToString();
    const jobsfeed = JSON.parse(jobJsonString)

    return jobsfeed
    } catch (error) {
        console.log(error)

        return false
    }
}

module.exports = {
    getFile
}