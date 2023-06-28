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
    const id = req.params.id;
    res.render('devSkills/show', {
        skill: devSkill.getOne(id)
    });
}