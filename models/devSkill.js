const skills = [
    {id: 1, skill: 'Javascript', comfort: 'High'},
    {id: 2, skill: 'CSS', comfort: 'Medium'},
    {id: 3, skill: 'HTML', comfort: 'High'},
    {id: 4, skill: 'Express', comfort: 'PANIC'},
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne() {
    id = parseInt(id);
    return devSkills.find(skill => skill.id === id);
}