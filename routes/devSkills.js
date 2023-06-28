var express = require('express');
var router = express.Router();

var devSkillsCtrl = require('../controllers/devSkills')

/* GET users listing. */
router.get('/', devSkillsCtrl.index);
router.get('/:id', devSkillsCtrl.show);

module.exports = router;
