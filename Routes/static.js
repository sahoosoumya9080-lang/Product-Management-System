const express = require('express');
const staticRouter = express.Router();

staticRouter.get('/',(req,res)=>{
    res.render('product');
})

module.exports = staticRouter;