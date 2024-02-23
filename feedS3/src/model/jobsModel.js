const pg = require("../services/pgService")

async function getjobs() {
    try {
        const queryRes = await pg.pgServiceQuery(`SELECT * FROM jobs`)

        return queryRes.rows
    } catch (error) {
        console.log(error)
        
        return false
    }
}

module.exports = {
    getjobs
}