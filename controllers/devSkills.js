const devSkill = require('../models/devSkill');

module.exports = {
    index,
    show
};

function index(req, res) {
    res.render('devSkills/index', {
        devSkills: devSkill.getAll()
    });
}

function show(req, res) {
    res.render('devSkills/show', {
        skill: skill.getOne(req.params.id),
    });
}