const moderateContentController = require("./controller/moderateContentController")
const awsSqsService = require("./service/awsSqsService")

const mensagem = [{
    "id":"401330a4-6633-4887-8ba8-144e2538d00e",
    "company_id":"7114639c-c391-4ed7-94d1-2a0fa7efadea",
    "title":"teste",
    "description":"teste",
    "location":"brasil",
    "notes":"testando tudo aqui",
    "status":"draft",
    "created_at":"2024-02-21T00:25:16.649Z",
    "updated_at":"2024-02-21T00:25:16.649Z"
}]

awsSqsService.sendQueueMessage(mensagem).then(() => {
    console.log("mensagem enviada")
    return
})

setTimeout(() => {
    awsSqsService.getQueueMessage().then((response) => {
        console.log("mensagem recebida")

        moderateContentController(JSON.parse(response.Body)).then((res) => {
            if(res) {
                console.log("deu bom")
                return
            }

            console.log("deu ruim")
            return
        })

        awsSqsService.deleteQueueMessage(response.ReceiptHandle).then((res) => {
            console.log("mensagem deletada")

            return
        })

        return
    })

}, "2000");