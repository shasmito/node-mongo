const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("I know open node ");
})

app.listen(3000, () => console.log('listenting to port 3000'));