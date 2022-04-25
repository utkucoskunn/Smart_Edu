//*********require section**********
const express=require('express');
const ejs=require('ejs');
const mongoose=require('mongoose');
const session=require('express-session');
const MongoStore = require('connect-mongo');
const flash=require('connect-flash');
const methodOverride=require('method-override');

const pageRoute=require('./routes/pageRoute');
const courseRoute=require('./routes/courseRoute');
const categoryRoute=require('./routes/categoryRoute');
const userRoute=require('./routes/userRoute');

//*********connect db**************

mongoose.connect('mongodb+srv://utkucoskun:88588858@cluster0.rsyf3.mongodb.net/smartedu-db?retryWrites=true&w=majority', {
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

//*********global Variable section**********
global.userIN=null;

//*********middlewares section**********
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret:'my_keyboard_cat',
    resave:false,
    saveUninitialized:true,
     store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smartedu-db'}),
}));
app.use(flash());
app.use((req,res,next)=>{
    res.locals.flashMessage=req.flash();
    next();
});
app.use(methodOverride('_method',{
    methods:['POST','GET'],
})
);

//*********routes section**********
app.use('*',(req,res,next)=>{
    userIN=req.session.userID;
    next();
})
app.use('/',pageRoute);
app.use('/courses',courseRoute);
app.use('/categories',categoryRoute);
app.use('/users',userRoute);
app.get('/about',);




//*********Port section**********

const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`App started on port ${port}`)
});