require("dotenv").config()

// pg env vars for db connection
const pgUser = process.env.PGUSER
const pgHost = process.env.PSHOST
const pgPassword = process.env.PGPASSWORD
const pgDB = process.env.PGDATABASE
const pgPort = process.env.PGPORT

// Open ai env vars for setup client
const opneAiApiKey = process.env.OPENAIAPIKEY

const sqsUrl = process.env.SQSURL

module.exports = {
    pgUser,
    pgHost,
    pgPassword,
    pgDB,
    pgPort,
    opneAiApiKey,
    sqsUrl
}