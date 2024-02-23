const companiesModel = require("../model/companiesModel")

async function getCompanies(res) {
    try {
        const queryRows = await companiesModel.getAllCompanies();
    
        if(typeof queryRows != 'object') {
            res.status(500).json({msg: "internal server error"})

            return
        }

        res.status(200).json(queryRows)
    
        return
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })

        return
    }
}

async function getCompany(req, res) {
    try {
        const queryRows = await companiesModel.getOneCompany(req.params.company_id)

        if(typeof queryRows !== 'object') {
            res.status(400).json({ msg: "Incorrect id provided" })

            return
        }

        res.status(200).json(queryRows)
    
        return
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })

        return
    }
}

module.exports = {
    getCompanies,
    getCompany
}