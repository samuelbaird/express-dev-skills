const skills = [
    {id: 1, skill: 'Javascript', comfort: 'High'},
    {id: 2, skill: 'CSS', comfort: 'Medium'},
    {id: 3, skill: 'HTML', comfort: 'High'},
    {id: 4, skill: 'Express', comfort: 'PANIC'},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.comfort = 'Medium';
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}