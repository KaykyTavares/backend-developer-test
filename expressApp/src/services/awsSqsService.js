const { SQS } = require("@aws-sdk/client-sqs")
const envVars = require("../config/envVarsConfig")

const sqsClient = new SQS()

async function queueMessage(message) { 
    try {
        await sqsClient.sendMessage({
            QueueUrl: envVars.sqsUrl,
            MessageBody: JSON.stringify(message),
        });

        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    queueMessage
}