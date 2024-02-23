require("dotenv").config()

// pg env for db connection
const pgUser = process.env.PGUSER
const pgHost = process.env.PSHOST
const pgPassword = process.env.PGPASSWORD
const pgDB = process.env.PGDATABASE
const pgPort = process.env.PGPORT

// S3 env vars for setup client
const s3BucketName = process.env.S3BUCKETNAME
const s3FileName = process.env.S3FILENAME

// SQS env vars for setup client
const sqsUrl = process.env.SQSURL

// local port to run express app
const port = process.env.PORT

module.exports = {
    pgUser,
    pgHost,
    pgPassword,
    pgDB,
    pgPort,
    s3BucketName,
    s3FileName,
    sqsUrl,
    port
}