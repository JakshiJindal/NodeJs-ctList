const express=require('express');
const Contact = require('./models/contact');
const path=require('path');
const db= require('./config/mongoose');
const port=8000;
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

app.get('/',function(req,res){
    Contact.find({},function(err,contacts){
        if(err){
            console.log('unable to fetch list');
            return;
        }
        return res.render('home',{
            title:"Contact List",
            contact_list:contacts
        })
    })
})

app.post('/add-contact',function(req,res){
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
                  },function(err,newContact){
        if(err){
            console.log('unable to create contact');
            return;
        }
        console.log('***',newContact);
        return res.redirect('/');
    })
})

app.get('/delete-contact',function(req,res){
    console.log(req.query);
    let id=req.query.id;
    Contact.findOneAndDelete(id,function(err){
        if(err){
            console.log('unable to delete');
            return;
        }
        return res.redirect('/');
    })
})

app.listen(port,function(err){
    if(err)
    console.log(err);
})