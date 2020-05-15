const router = require('express').Router();

const SignUp = require('./users');
const Login = require('./login');
const SupportTeam = require('./supportTeam');
const Accounts = require('./accounts');
const PersonalInfo = require('./personalInfo');
const { isAuthenticated } = require('../middleware/authentication');

// router.get('/api/check-auth', isAuthenticated);
router.get('/api/support-team', SupportTeam);
router.post('/api/signup', SignUp);
router.post('/api/login', Login);
router.post('/api/user/:userId/accounts', isAuthenticated, Accounts);
router.post('/api/user/:userId/personal-info', PersonalInfo);

module.exports = router;
