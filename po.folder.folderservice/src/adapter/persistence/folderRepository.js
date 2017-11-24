const persistence = require('../../adapter/persistence/');

const getFolders = () => {
  const allFolders = persistence.getAllFolders();
  return allFolders;
};

module.exports = {
  getFolders,
};
