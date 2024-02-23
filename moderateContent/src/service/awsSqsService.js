const { SQS } = require("@aws-sdk/client-sqs")
const envVars = require("../config/envVars")

const sqsClient = new SQS()

async function getQueueMessage() { 
    try {
        const queueMessage = await sqsClient.receiveMessage({
            QueueUrl: envVars.sqsUrl,
        });
        
        return queueMessage.Messages[0]
    } catch (error) {
        console.log(error)
        return false
    }
}

async function deleteQueueMessage(receiptHandle) { 
    try {
        const deletedMessage = await sqsClient.deleteMessage({
            QueueUrl: envVars.sqsUrl,
            ReceiptHandle: receiptHandle
        })

        return deletedMessage
    } catch (error) {
        console.log(error)
        return false
    }

}

async function sendQueueMessage(message) { 
    try {
        const msg = await sqsClient.sendMessage({
            QueueUrl: envVars.sqsUrl,
            MessageBody: JSON.stringify(message), 
        });
     
        return msg
    } catch (error) {
        console.log(error)
        return false
    }
}


module.exports = {
    getQueueMessage,
    sendQueueMessage,
    deleteQueueMessage
}