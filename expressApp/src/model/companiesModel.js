const pg = require("../services/pgService")

async function getAllCompanies() {
    try {
        const queryRes = await pg.pgServiceQuery("SELECT * FROM companies")
    
        return queryRes.rows
    } catch (error) {
        console.log(error)

        return false
    }
}

async function getOneCompany(id) {
    try {
        const queryRes = await pg.pgServiceQuery(`SELECT * FROM companies WHERE id = '${id}'`)
    
        return queryRes.rows[0]
    } catch (error) {
        console.log(error)

        return false
    }
}

module.exports = {
    getAllCompanies,
    getOneCompany
}