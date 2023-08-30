const router = require("express").Router();
const {signupUser,users,login,updateUsersData,findUserByID } = require('../controller/user.controller');
const sendEmail = require('../util/sendEmail');
router.get('/users',users);
router.post('/signup',signupUser);
router.post('/login',login);
router.put('/update-user/:id',updateUsersData);
router.get('/users/:id',findUserByID);
router.get('/sendEmail',sendEmail);



module.exports = router;