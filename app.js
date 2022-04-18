//*********eequire section**********
const express=require('express');
const ejs=require('ejs');
const mongoose=require('mongoose');
const pageRoute=require('./routes/pageRoute');
const courseRoute=require('./routes/courseRoute');
const categoryRoute=require('./routes/categoryRoute');

//*********connect db**************

mongoose.connect('mongodb://localhost/smartedu-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log(('DB CONNECTED!'))
}).catch((err)=>{
    console.log(err)
});

//*********variable section**********
const app=express();

//*********template engine section**********
app.set("view engine", "ejs");

//*********middlewares section**********
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//*********routes section**********
app.use('/',pageRoute);
app.use('/courses',courseRoute);
app.use('/categories',categoryRoute);
app.get('/about',);




//*********Port section**********

const port=3000;
app.listen(port,()=>{
    console.log(`App started on port ${port}`)
});