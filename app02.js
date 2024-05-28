const express = require('express');

const app = express();

app.use((req, res,
         next) => {
    console.log('In middleware 1')
    next()
})

app.use((req, res) => {
    res.send(body: '<h1>Hello from express</h1>')
})

app.listen(8000, () => {
    console.log('Server is running at port 8000');
})
