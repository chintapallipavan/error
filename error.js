const express=require("express");
const bodyParser=require("bodyParser");
const app=express();
const adminRoutes=require('./router/admin');
const shopRoutes=require('./route/shop');
app.use(bodyParser.urlencoded({extend:false}));
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>');

});
app.listen(3000);

