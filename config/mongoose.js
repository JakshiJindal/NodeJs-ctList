const mongoose=require('mongoose');
 
//connect to database
mongoose.connect('mongodb://localhost/contact_list_db');

//aquire connection
const db= mongoose.connection;

//error
db.on('error',function(err){
    console.log('db not connected');
})

//up and running then print message
db.once('open',function(){
    console.log('successfully connected');
})