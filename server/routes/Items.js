const { Router } = require('express');
const checkUser = require('../middleware/authMiddleware');
const Uploaditem = require('../controllers/Uploaditem');
const getitems = require('../controllers/getitems');
const multer = require('multer');
const path = require('node:path');
const getitem = require('../controllers/getitem')
const Updateitem = require('../controllers/Updateitem')
const getitemsfiltered = require('../controllers/getitemsfiltered')
const checkAdmin = require('../middleware/checkAdmin')
const getuploadeditems = require('../controllers/getuploadeditems')
const getuser = require('../controllers/getuser');
const deleteuser = require('../controllers/deleteuser');
const toggle = require('../controllers/toggle');

const imageUpload = multer({
  dest: 'images',
})

const router = Router();




router.post('/uploaditem', checkUser, imageUpload.single('image'), Uploaditem);
router.put('/updateitem', checkUser, imageUpload.single('image'), Updateitem);


router.get('/items', checkUser, getitems);
router.post('/toggle', checkUser, toggle);
router.post('/items/filtered', checkUser, getitemsfiltered);
router.get('/uploadeditems', checkUser, getuploadeditems);
router.post('/item', checkUser, getitem);


router.get('/users', checkAdmin, getuser)
router.post('/users', checkAdmin, deleteuser);


module.exports = router;