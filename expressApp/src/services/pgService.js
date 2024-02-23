const { Pool } = require("pg")
const envVar = require("../config/envVarsConfig")
   
const pgClient = new Pool({
    user: envVar.pgUser,
    host: envVar.pgHost,
    database: envVar.pgDB,
    password: envVar.pgPassword,
    port: envVar.pgPort
})

async function pgServiceQuery(query) {
    try {
        const queryRes = await pgClient.query(query)   

        return queryRes
    } catch (error) {
        console.error(error)

        return false
    }
}


module.exports = {
    pgServiceQuery
}