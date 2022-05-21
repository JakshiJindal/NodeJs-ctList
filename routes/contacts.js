const express=require('express');
const router=express.Router();
const contactsController=require('../controllers/contactList_controller');


router.get('/get-contacts',contactsController.contacts);
router.post('/add-contact',contactsController.addContacts);
router.get('/delete-contact',contactsController.deleteContacts);

console.log('working routes');
module.exports=router;
