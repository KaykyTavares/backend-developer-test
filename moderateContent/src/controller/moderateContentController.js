const openAiService = require("../service/openAiService")
const jobsModel = require("../model/jobsModel")

async function moderateContentController(queueMessageBody){
    try {
        const jobModerateStatus = await  openAiService.moderateContent(queueMessageBody[0].description, queueMessageBody[0].title)
        console.log(jobModerateStatus)

        if(jobModerateStatus.jobDescription.status || jobModerateStatus.jobTitle.status) {
            await jobsModel.editJobStatus(queueMessageBody[0].id, "rejected", jobModerateStatus.jobTitle.openAiResponse + jobModerateStatus.jobDescription.openAiResponse)

            return
        }

        await jobsModel.editJobStatus(queueMessageBody[0].id, "published", null)

        return true
    } catch (error) {
        console.log(error)

        return false
    }
}

module.exports = moderateContentController