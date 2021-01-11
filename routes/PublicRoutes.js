var express = require('express');
const router = express.Router();
module.exports = router;
const PublicController = require('../controller/PublicController');

const oneTableController = require('../controller/oneTableController');
const twoTableController = require('../controller/twoTableController');
const threeTablecontroller =  require('../controller/threeTableController');
router.get('/', PublicController.HomePage);
router.get('/fourTables', PublicController.fourTables);

router.get('/threeTableOne', threeTablecontroller.getThreeTablesOne);
router.get('/threeTableTwo', threeTablecontroller.getThreeTablesTwo);
router.get('/oneTableOne', oneTableController.getOneTableOne);
router.get('/oneTableTwo', oneTableController.getOneTableTwo);
router.get('/twoTablesOne', twoTableController.getTwoTableOne);
router.get('/twoTablesTwo', twoTableController.getTwoTableTwo);

router.post('/oneTableOne', oneTableController.postOneTableOne);
router.post('/oneTableTwo', oneTableController.postOneTableTwo);
router.post('/twoTablesOne', twoTableController.postTwoTableOne);
router.post('/twoTablesTwo', twoTableController.postTwoTableTwo);
router.post('/threeTableOne', threeTablecontroller.postThreeTableOne);
router.post('/threeTableTwo', threeTablecontroller.postThreeTableTwo);