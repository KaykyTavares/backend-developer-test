const pg = require("../service/pgService")

async function editJobStatus(job_id, status, notes) { 
    try {
        if(status === "rejected") {
            const queryRes = await pg.pgServiceQuery(`UPDATE jobs SET status = '${ status }', notes = '${ notes }' WHERE id = '${ job_id }' RETURNING *`)

            return queryRes
        }

        const queryRes = await pg.pgServiceQuery(`UPDATE jobs SET status = '${ status }' WHERE id = '${ job_id }' RETURNING *`)

        return queryRes
    } catch (error) {
        console.log(error)

        return false
    }
}

module.exports = {
    editJobStatus
}