const express = require('express');
const app = express();

app.get('/names',(req,res)=>{
    console.log('hello');
    res.send('hello');
});

app.listen(5200, () => {
    console.log('server is running on port 5200');
});