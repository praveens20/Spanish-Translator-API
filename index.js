const express = require('express');
const app = express();
const translate = require("@vitalets/google-translate-api");

const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    console.log("listening on port",port);
})

app.get('/', (req,res) => {
    res.send("Working---------");
})

app.post('/translate', (req,res) => {
    let str = req.body.string;

    translate( text=str, opts= {to: "es"})
        .then(result => res.send(result.text))
        .catch(err => res.send(err))
})