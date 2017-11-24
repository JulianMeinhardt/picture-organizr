// TODO: Should handle db connection settings
const persistence = require('mongoose');

persistence.connect('mongodb://localhost:12017/picture-organizr');


module.exports = persistence;
