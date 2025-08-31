const express = require('express');
const app= express();
const mongoose = require('mongoose');
const staticRouter = require('./Routes/static');
const dynamicRouter = require('./Routes/dynamic');
const port=8000;
const path=require('path');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views',path.resolve('./Views'));

mongoose.connect('mongodb://127.0.0.1:27017/product_management_db')
.then(() => {
    console.log('Connected to MongoDB Successfully....');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

app.use('/',staticRouter);

app.use('/api',dynamicRouter)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});