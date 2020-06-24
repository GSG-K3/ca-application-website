const router = require('express').Router();

const getStories = require('./SuccessStories');
const SignUp = require('./users');
const Login = require('./login');
const SupportTeam = require('./supportTeam');
const Accounts = require('./accounts');
const PersonalInfo = require('./personalInfo');
const IsAuthenticated = require('../middleware/auth');
const CheckAuth = require('./checkAuth');
const profileInfo = require('./profile');
const Projects = require('./projects');

router.get('/api/success-stories', getStories);
router.get('/home/support-team', SupportTeam);
router.post('/api/signup', SignUp);
router.post('/api/login', Login);
router.get('/api/user/:userId', IsAuthenticated, CheckAuth);
router.post('/api/user/:userId/accounts', IsAuthenticated, Accounts);
router.post('/api/user/:userId/personal-info', IsAuthenticated, PersonalInfo);
router.get('/api/user/:userId/profile', IsAuthenticated, profileInfo);
router.post('/api/user/:userId/projects', IsAuthenticated, Projects);

module.exports = router;
