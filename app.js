//*********eequire section**********
const express=require('express');
const ejs=require('ejs');


//*********variable section**********
const app=express();

//*********template engine section**********
app.set("view engine", "ejs");


app.get('/',(req,res)=>{
    res.status(200).render('index');
})

//*********middlewares section**********
app.use(express.static('public'));

//*********routes section**********

//*********Port section**********

const port=3000;
app.listen(port,()=>{
    console.log(`App started on port ${port}`)
});