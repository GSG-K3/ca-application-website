const router = require('express').Router();

const getStories= require('./SuccessStories') 
const SignUp = require('./users');
const Login = require('./login');
const SupportTeam = require('./supportTeam');
const Accounts = require('./accounts');
const PersonalInfo = require('./personalInfo');
const isAuthenticated = require('../middleware/auth')
const CheckAuth= require('./checkAuth')

router.get('/api/success-stories',getStories )
router.get('/home/support-team', SupportTeam);
router.post('/api/signup', SignUp);
router.post('/api/login',Login);
router.get('/api/user/checkAuth', isAuthenticated, CheckAuth)
router.post('/api/user/:userId/accounts',isAuthenticated, Accounts);
router.post('/api/user/:userId/personal-info',isAuthenticated, PersonalInfo);



module.exports= router;
