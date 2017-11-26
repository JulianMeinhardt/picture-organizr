const logger = require('../../infrastructure/logger');
const FolderModel = require('../../infrastructure/database/models/folder');
const Folder = require('../../domain/folder');


const getFolders = async () => {
  try {
    const queryAllFoldersResult = await FolderModel.find({});
    const allFolders = queryAllFoldersResult.map(
      folder => new Folder(folder.name, folder.filepath),
    );
    return allFolders;
  } catch (e) {
    logger.error('error while querying all folders', e);
  }
};

module.exports = {
  getFolders,
};
