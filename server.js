const express = require('express');
const app = express();
const port =5000;
const bodyParser = require('body-parser')
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
        res.render("home")
});

app.post("/data", (req,res)=>{
const total = Number(req.body.number1) + Number(req.body.number2);
res.render("result",{
    result : total,
})

});


app.listen(port,()=>{
    console.log("server has been started")
});