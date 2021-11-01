const express = require('express');

const app = express();
const typeChecker = require('./accountTypeChecker');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,DELETE,OPTIONS,PUT,HEAD"
    );
    next();
});

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});
// calling post method
app.post('/api/checkaccounttype', (req, res) => {

    if (req.body.length > 0)
        res.status(200).send(`The account type is ${typeChecker(req.body)}`);
    else
        res.status(204).send('No Input data');
});

module.exports = app;