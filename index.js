const express = require('express');

const app = express();

app.get('/', (req,res) =>{
    res.send("Thank you for calling me , I am learning node js using express js that is the framework of node js");
})

app. listen(3000, () => console.log('Listening to port 3000'));