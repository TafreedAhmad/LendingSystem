const { Router } = require('express');
const Signup = require('../controllers/Signup')
const Signin = require('../controllers/Signin')
const Signout = require('../controllers/Signout')

const router = Router();




router.post('/signup', Signup);
router.post('/signin', Signin);
router.get('/signout', Signout);

module.exports = router;

