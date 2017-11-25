const logger = require('../../infrastructure/logger');
const Folder = require('../../infrastructure/database/models/folder');


const getFolders = () => {
  const allFolders = Folder.find({}, (err, docs) => {
    if (err) {
      logger.error('Error while receiving all folders from DB');
      return null;
    }
    return docs;
  });
  return allFolders;
};

module.exports = {
  getFolders,
};
