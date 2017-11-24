const persistence = require('../../infrastructure/database');


const getFolders = () => {
  const allFolders = persistence.getAllFolders();
  return allFolders;
};

module.exports = {
  getFolders,
};
