const router = require('express').Router();

const getStories= require('./SuccessStories') 
const SignUp = require('./users');
const Login = require('./login');
const SupportTeam = require('./supportTeam');
const Accounts = require('./accounts');
const PersonalInfo = require('./personalInfo');
const profileInfo = require('./profile');

router.get('/api/success-stories',getStories )
router.get('/home/support-team', SupportTeam);
router.post('/api/signup', SignUp);
router.post('/api/login', Login);
router.post('/api/user/:userId/accounts', Accounts);
router.post('/api/user/:userId/personal-info', PersonalInfo);
router.post('/api/user/:userId/profile', profileInfo);



module.exports= router;
