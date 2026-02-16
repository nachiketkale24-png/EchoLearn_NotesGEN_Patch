import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = 8000;

const app = express();
const PORT = process.env.PORT || 8000;
app.get('/',(req,res)=>{
    res.json({message:"welcom to echolearn"});
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

