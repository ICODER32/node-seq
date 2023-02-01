const { User } = require('../models');

const userData = [{
    username: 'maria',
    password: 'project1',
    email: 'maria@gmail.com'

},
{
    username: 'mary90272',
    password: 'bootcamp1',
    email: 'maryaaa@gmail.com'
},
{
    username: 'mary',
    password: 'bootcamp2',
    email: 'mary@gmail.com'
},
{
    username: 'unk person',
    password: 'bootcamp3',
    email: 'unl@gmail.com'
},
{
    username: 'Newperson',
    password: '987654321',
    email: 'newPerson@gmail.com'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;