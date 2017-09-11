/**
 * Created by Vaidika Tibrewal on 4/19/2017.
 */

const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
const db = require('./db');
app.set("view engine", "hbs");

let row=[];
//let pro_nam=[];


app.get('/',function(req,res) {

    db.fetchTo(function (row) {
        res.render('main', {row:row});

    })
})



app.use('/', express.static(__dirname + "/public_static"));

let cart=[];
app.post('/addto',function(req,res) {

    console.log(req.body);
    db.addto((req.body.id), function (result) {
        res.redirect('/fetch');
    })
})
app.post('/remove',function(req,res) {
    console.log(req.body);
    db.removeto(req.body.id, function (result) {
        res.redirect('/fetch');
    })
})
    app.get('/fetch',function(req,res) {

        db.fetchTocart(function (image) {

            res.render('cart', {cart: image});

        })
    })



let brand=[]
app.get('/fetchbrand',function(req,res){
    console.log(req.body.id)
    db.fetchbrand('dell',function(rows){
        res.render('main',{row:rows})
    })
})


app.listen(3451,function(){
console.log("server started at localhost:3451")
});
