function validateInsertBody(body) {
    const bodyPayload = {
        company_id: body.company_id, 
        title: body.title,
        description: body.description,
        location: body.location,
        notes: body.notes
    }
    
    let missingValues = []

    const arrBodyPayload = Object.entries(bodyPayload)

    arrBodyPayload.forEach(element => {
        if(element[1] === undefined || element[1] === null) {
            missingValues.push(element)
        }
    });

    if(missingValues.length > 0) {
        const objMissingValue = Object.fromEntries(missingValues)
        
        return `body missing the following keys: ${Object.keys(objMissingValue)}`
        
    }

    return true
}

function validateEditBody(body) {
    const bodyPayload = { 
        title: body?.title,
        location: body?.location,
        description: body?.description,
    }

    const arrBodyPayload = Object.entries(bodyPayload)

    let missingValues = []
    let validatedValues = []

    arrBodyPayload.forEach(element => {
        if(element[1] === undefined || element[1] === null) {
            missingValues.push(element)
        } else {
            validatedValues.push(element)
        }
    });

    if(missingValues.length === 3) {
        const objMissingValue = Object.fromEntries(missingValues)
        
        return `body must have at least one of these keys: ${Object.keys(objMissingValue)}`
    } 


    return {
        length: validatedValues.length,
        payload: validatedValues
    }
}

module.exports = {
    validateInsertBody,
    validateEditBody
}