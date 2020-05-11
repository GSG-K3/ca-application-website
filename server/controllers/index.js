const router = require('express').Router();

const SignUp  = require('./users');
const Login = require('./login');
const SupportTeam = require('./supportTeam');
const Accounts = require('./accounts');


router.get('/home/support-team',SupportTeam)
router.post('/api/signup', SignUp);
router.post('/api/login',Login)
router.post('/api/user/:userId/accounts',Accounts)

module.exports = router;
