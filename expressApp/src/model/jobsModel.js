const pg = require("../services/pgService")
const validationsUtils = require("../utils/validationsUtils")

async function createJob(body) {
    try {
        const validatedBody = validationsUtils.validateInsertBody(body)

        if(validatedBody != true){ 
            return validatedBody
        }

        const queryRes = await pg.pgServiceQuery(`INSERT INTO jobs (company_id, title, description, location, notes) VALUES ('${body.company_id}', '${body.title}', '${body.description}', '${body.location}', '${body.notes}') RETURNING *`)
 
        return queryRes
    } catch (error) {
        console.log(error)

        return false
    }
}

async function getJob(job_id) {
    try {
        const queryRes = await pg.pgServiceQuery(`SELECT * FROM jobs WHERE id = '${job_id}'`)

        return queryRes
    } catch (error) {
        console.log(error)

        return false
    }
}

async function editJob(job_id, body) {
    try {
        const validatedBody = validationsUtils.validateEditBody(body)

        if(typeof validatedBody === 'string'){ 
            return validatedBody
        }

        let queryRes
        
        switch (validatedBody.length) {
            case 1:
                queryRes = await pg.pgServiceQuery(`UPDATE jobs SET ${validatedBody.payload[0][0]} = '${validatedBody.payload[0][1]}' WHERE id = '${job_id}' RETURNING *`)

                return queryRes
            case 2:
                queryRes = await pg.pgServiceQuery(`UPDATE jobs SET ${validatedBody.payload[0][0]} = '${validatedBody.payload[0][1]}', ${validatedBody.payload[1][0]} = '${validatedBody.payload[1][1]}' WHERE id = '${job_id}' RETURNING *`)

                return queryRes

            case 3:
                queryRes = await pg.pgServiceQuery(`UPDATE jobs SET ${validatedBody.payload[0][0]} = '${validatedBody.payload[0][1]}', ${validatedBody.payload[1][0]} = '${validatedBody.payload[1][1]}', ${validatedBody.payload[2][0]} = '${validatedBody.payload[2][1]}' WHERE id = '${job_id}' RETURNING *`)

                return queryRes

            default:
                break;
        }

    } catch (error) {
        console.log(error)

        return false
    }
}

async function deleteJob(job_id) {
    try {
        const queryRes = await pg.pgServiceQuery(`DELETE FROM jobs WHERE id = '${job_id}' RETURNING *`)

        return queryRes
    } catch (error) {
        console.log(error)

        return false
    }
}

async function editJobStatus(job_id) {
    try {
        const queryRes = await pg.pgServiceQuery(`UPDATE jobs SET status = 'archived' WHERE id = '${job_id}' RETURNING *`)

        return queryRes
    } catch (error) {
        console.log(error)

        return false
    }
}

module.exports = {
    createJob,
    getJob,
    editJob,
    deleteJob,
    editJobStatus
}