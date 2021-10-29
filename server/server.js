require('dotenv').config();
const express=require('express');
const app=express();
const cors =require('cors')
const Mongoose=require('mongoose');
const PORT= process.env.PORt||5000;
app.use(cors());

Mongoose.connect(process.env.DB,{useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=>{
    console.log('db')
}).catch((error)=>{
    console.log(error)
})
   

require('./routes/route')(app);



app.listen(PORT,()=>{
    console.log('server started at '+ PORT)
})


