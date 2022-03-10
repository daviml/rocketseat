const express = require('express');

const app = express();

app.use(express.json());

app.get("/courses", (request,response) => {
    const query = request.query;
    console.log(query);
    return response.json(["C 1","C 2","C 3"]);
});

app.post("/courses",(request,response) => {
    const body = request.body;
    console.log(body)
    return response.json(["C 1","C 2","C 3","C 4"]);
});

app.put("/courses/:id",(request,response) => {
    const params = request.params;
    const { id } = request.params;
    console.log(params)
    console.log(id)
    return response.json(["C 6","C 2","C 3","C 4"]);
});

app.patch("/courses/:id",(request,response) => {
    return response.json(["C 6","C 7","C 3","C 4"]);
});

app.delete("/courses/:id",(request,response) => {
    return response.json(["C 6","C 7","C 4"]);
});

app.listen(3333);