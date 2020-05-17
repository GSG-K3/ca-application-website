const router = require('express').Router();
const isAuthenticated = require('../middleware/authentication');

const getStories = require('./SuccessStories');
const SignUp = require('./users');
const Login = require('./login');
const SupportTeam = require('./supportTeam');
const Accounts = require('./accounts');
const PersonalInfo = require('./personalInfo');

router.get('/api/success-stories', getStories);
router.get('/api/support-team', SupportTeam);
router.post('/api/signup', SignUp);
router.post('/api/login', Login);
router.post('/api/user/:userId/accounts', isAuthenticated, Accounts);
router.post('/api/user/:userId/personal-info', isAuthenticated, PersonalInfo);

module.exports = router;
