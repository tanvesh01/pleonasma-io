const express = require("express");

const app = express();

app.get('/', (req, res) => {
    const people = [
        {id: 1, firstName: 'Adam', lastName: 'Apple'},
        {id: 2, firstName: 'Adam', lastName: 'Apple'},
        {id: 3, firstName: 'Adam', lastName: 'Apple'}
    ];

    return res.json(people);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));