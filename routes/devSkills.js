var express = require('express');
var router = express.Router();

var devSkillsCtrl = require('../controllers/devSkills')

/* GET users listing. */
router.get('/', devSkillsCtrl.index);
router.get('/about', devSkillsCtrl.about)
router.get('/new', devSkillsCtrl.new);
router.get('/:id', devSkillsCtrl.show);
router.get('/:id/edit', devSkillsCtrl.edit)
router.post('/', devSkillsCtrl.create);
router.delete('/:id', devSkillsCtrl.delete);
router.put('/:id', devSkillsCtrl.update);

module.exports = router;
