const { S3 } = require("@aws-sdk/client-s3")
const envVars = require("../config/envVarsConfig")

const s3 = new S3()

async function updateFile(fileContent) {
    try {
        const params = {
            Bucket: envVars.s3BucketName,
            Key: envVars.s3FileName,
            Body: Buffer.from(`${JSON.stringify(fileContent)}`),
    
        }
       
        await s3.putObject(params)

        return
    } catch (error) {
        console.log(error)

        return false
    }
}

module.exports = {
    updateFile
}