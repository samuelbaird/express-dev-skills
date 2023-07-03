const devSkill = require('../models/devSkill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
    about
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

function newSkill(req, res) {
    res.render('devSkills/new')
}

function create(req, res) {
    devSkill.create(req.body)
    res.redirect('/devSkills');
}

function deleteSkill(req, res) {
    devSkill.deleteOne(req.params.id);
    res.redirect('/devSkills');
}

function edit(req, res) {
    const skill = devSkill.getOne(req.params.id);
    res.render('devSkills/edit', skill)
}

function update (req, res) {
    devSkill.update(req.params.id, req.body);
    res.redirect(`/devSkills`);
}

function about (req, res) {
    res.render('devSkills/about')
}