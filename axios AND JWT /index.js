const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const select = "this";

app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.body);
    next();
})

app.post("/api/post",(req,res)=>{
    try{
    const{user,password} = req.body;
    const t = jwt.sign({
        id:1
    },select);

    console.log(t);

    res.status(200).json({
        data:t
    })
    }
    catch(e){
        console.log(e);
    }

})

app.get("/api/get",(req,res)=>{
    try{
        const aut = req.headers.authorization;
        console.log(aut);
        const token =aut.split(" ")[1];
        const result = jwt.verify(
            aut,select
        );
        console.log(result);
        res.status(200).json(result);
    }catch(e){
        console.log(e);
    }
})

app.listen(3000,()=>{
    console.log("3000");
})
