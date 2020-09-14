const http = require("http");
const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>GET recebido com sucesso</h1>");
});

app.post("/", function(req, res) {
    res.status(201).send('<h1>POST recebido com sucesso!<h1>');
});

app.put("/:id", function(req, res) {
    let id = req.params.id;
    res.status(201).send(`<h1>PUT recebido com sucesso! ${id}</h1>`);
});

app.delete("/:id", function(req, res) {
    let id = req.params.id;
    res.status(200).send(`<h1>DELETE recebido com sucesso! ${id}</h1>`);
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));