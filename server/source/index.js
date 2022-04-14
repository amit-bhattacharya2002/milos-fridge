const express = require('express');
const app = express();
const port = 4000;


app.get("/", (req,res)=>{
    res.json({
        message: "hello world!",
    });
});

app.listen(port, ()=>{
    console.log(`server running on port${port}`);
})