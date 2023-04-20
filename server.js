import minimist from "minimist";
import express from "express";

import { rpslsPlay, rpsPlay } from "./lib/rpsls.js";

const args = minimist(process.argv.slice(2));
const app = express();
const port = args["port"] || 5000

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/app/", (req, res) => {
    res.status(200).send('200 OK');
})

app.get("/app/rps/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsPlay()));
})

app.get("/app/rpsls/", (req, res) => {
    res.status(200).send(JSON.stringify(rpslsPlay()));
})

//queries
app.get("/app/rps/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsPlay(req.query.shot)));
})

app.get("/app/rpsls/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rpslsPlay(req.query.shot)));
})

// accept JSON request bodies
app.post("/app/rps/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsPlay(req.body.shot)));
})

app.post("/app/rpsls/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rpslsPlay(req.body.shot)));
})

//url (parameter) endpoint
app.get("/app/rps/play/:shot", (req, res) => {
    res.status(200).send(JSON.stringify(rpsPlay(req.params.shot)));
})

app.get("/app/rpsls/play/:shot", (req, res) => {
    res.status(200).send(JSON.stringify(rpslsPlay(req.params.shot)));
})

app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
})

app.listen(port, () =>{
    console.log('Server listening on port ' + port);
})
