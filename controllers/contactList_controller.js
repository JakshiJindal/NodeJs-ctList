const Contact = require('../models/contact');


module.exports.contacts=function(req,res){
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
}

module.exports.addContacts=function(req,res){
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
                  },function(err,newContact){
        if(err){
            console.log('unable to create contact');
            return;
        }
        console.log('***',newContact);
        return res.redirect('/contacts/get-contacts');
    })
}

module.exports.deleteContacts=function(req,res){
    // console.log(req.query);
    let id=req.query.id;
    Contact.findOneAndDelete(id,function(err){
        if(err){
            console.log('unable to delete');
            return;
        }
        return res.redirect('/contacts/get-contacts');
    })
}