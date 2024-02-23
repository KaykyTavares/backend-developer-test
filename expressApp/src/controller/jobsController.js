const jobsModel = require("../model/jobsModel")
const sqsService = require("../services/awsSqsService")

async function creatJobDraft(req, res) {
    try {
        const queryRes = await jobsModel.createJob(req.body)

        if(typeof queryRes === "string") {
            res.status(400).json({ msg: queryRes})

            return
        }

        if(typeof queryRes === "boolean") {
            res.status(400).json({ msg: "Incorrect company_id"})

            return
        }

        res.status(201).json({ command: queryRes.command, rowCount: queryRes.rowCount, msg: "1 row inserted successfully", dataInserted: queryRes.rows})
    
        return
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })

        return
    }
}

async function editJobPostDraft(req, res) {
    try {
        const queryRes = await jobsModel.editJob(req.params.job_id, req.body)

        if(typeof queryRes === "string") {
            res.status(400).json({ msg: queryRes})

            return
        }

        res.status(200).json({ command: queryRes.command, rowCount: queryRes.rowCount, msg: "1 row updated successfully", dataUpdated: queryRes.rows})
    
        return
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error})

        return
    }
}

async function deleteJobPostDraft(req, res) {
    try {
        const queryRes = await jobsModel.deleteJob(req.params.job_id)

        if(typeof queryRes === "boolean") {
            res.status(400).json({ msg: "Incorrect id provided" })

            return
        }

        if (queryRes.rows.length === 0) {
            res.status(410).json({ msg: "row already deleted" })

            return
        }

        res.status(200).json({ command: queryRes.command, rowCount: queryRes.rowCount, msg: "1 row deleted successfully", dataDeleted: queryRes.rows})
    
        return
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })

        return
    }
}

async function publishJobPostDraft(req, res) {
    try {
        const queryRes = await jobsModel.getJob(req.params.job_id)

        const queueStatus = await sqsService.queueMessage(queryRes.rows)
        
        if(!queueStatus) {
            res.status(500).json({msg: "Internal server Error"})
        }

        res.status(200).json({msg: "sucess"})

        return
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })

        return
    }
}

async function arquiveActiveJobPost(req, res) {
    try {
        const queryRes = await jobsModel.editJobStatus(req.params.job_id)
        
        if(typeof queryRes === "boolean") {
            res.status(400).json({ msg: "Incorrect id provided" })
            
            return
        }

        res.status(200).json({ command: queryRes.command, rowCount: queryRes.rowCount, msg: "1 row updated successfully", dataUpdated: queryRes.rows })
    
        return
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })

        return
    }
}

module.exports = {
    creatJobDraft,
    editJobPostDraft,
    deleteJobPostDraft,
    publishJobPostDraft,
    arquiveActiveJobPost
}