const { request } = require("express")
const { response } = require("express")
const express = require ("express")
const { v4: uuidv4 } = require("uuid")

const app = express()

app.use(express.json())

const custumers = []

app.post("/account", (request,response) =>{
    
    const { cpf, name } = request.body

    const customerAlreadyExists = custumers.some(
        (customer) => customer.cpf === cpf
    )

    if(customerAlreadyExists){
        return response.status(400).json({error: "Customer already exists!"})
    }

    const id = uuidv4()

    custumers.push({
        cpf,
        name,
        id,
        statement: []
    })

    return response.status(201).send()
})

app.get("/statement/:cpf", (request, response) => {

    const { cpf } = request.params

    const customer = custumers.find(customer => customer.cpf === cpf)

    return response.json(customer.statement)

})

app.listen(3333)