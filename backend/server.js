const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.get("/",(req,res) => {
    res.status(200).send({message : "is OK !!"})
});

app.post("/form",(req,res) => {
    const body = req.body

    res.status(200).send(body)
});
app.put("/update",(req,res) => {
    console.log(rea.body)
    res.status(200).send({message : "update success !!"})
});
app.delete("/delete/:id",(req,res) => {
    console.log(req.params.id);
    res.status(200).send({message : "delete success !!"})
});
const port = 8080;
app.listen(port,() => {
    console.log('server is running : '+port)
});