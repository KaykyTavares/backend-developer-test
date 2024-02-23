const feedModel = require("../model/feedModel")

async function getFeed(res) {
    try {
        const response  = await feedModel.getJob()

        if(typeof response !== "object") {
            res.status(500).json({msg: "internal server error"})

            return
        }

        res.status(200).json(response)

        return
    } catch (error) {
        console.log(error)

        return false
    }
}

module.exports = {
    getFeed
}