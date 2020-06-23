const router = require("express").Router();

const getStories = require("./SuccessStories");
const SignUp = require("./users");
const Login = require("./login");
const SupportTeam = require("./supportTeam");
const Accounts = require("./accounts");
const PersonalInfo = require("./personalInfo");
const IsAuthenticated = require("../middleware/auth");
const CheckAuth = require("./checkAuth");
const LogOut = require('./logOut'); 

router.get("/api/success-stories", getStories);
router.get("/home/support-team", SupportTeam);
router.post("/api/signup", SignUp);
router.post("/api/login", Login);
router.delete('/api/logout',LogOut)
router.get("/api/user/checkAuth", IsAuthenticated, CheckAuth);
router.post("/api/user/:userId/accounts", IsAuthenticated, Accounts);
router.post("/api/user/:userId/personal-info", IsAuthenticated, PersonalInfo);

module.exports = router;
