const { OpenAI } = require("openai")
const envVars = require("../config/envVars")

const openAiClient = new OpenAI({ apiKey: envVars.opneAiApiKey })

async function moderateContent(jobDescription, jobTitle) {
    try {
        const responseJobDescription = await openAiClient.moderations.create({
            input: jobDescription
        })

        const responsejobTitle = await openAiClient.moderations.create({
            input: jobTitle
        })

        const statusJobDescription = responseJobDescription.results.some(
            (result) => result.flagged
        );

        const statusResponsejobTitle = responsejobTitle.results.some(
            (result) => result.flagged
        );

        
        return {
            jobDescription: {
                status: statusJobDescription,
                openAiResponse: JSON.stringify(responseJobDescription.results)
            },
            jobTitle: {
                status: statusResponsejobTitle,
                openAiResponse: JSON.stringify(responsejobTitle.results)
            }
        }
    
    } catch (error) {
        console.log(error)

        return false
    }
}

module.exports = {
    moderateContent
}