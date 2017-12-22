const logger = require('../../infrastructure/logger');
const FolderModel = require('../../infrastructure/database/models/folder');
const Folder = require('../../domain/folder');

const getFolders = async () => {
  try {
    const queryAllFoldersResult = await FolderModel.find({});
    const allFolders = queryAllFoldersResult.map(folder => new Folder(folder.name, folder.filepath, folder.id));
    return allFolders;
  } catch (e) {
    logger.error('error while querying all folders', e);
  }
};

const getFolderById = async (id) => {
  try {
    const queryFolderByIDResult = await FolderModel.findOne({ id });
    const folder = new Folder(queryFolderByIDResult.name, queryFolderByIDResult.filepath, queryFolderByIDResult.id);
    return folder;
  } catch (e) {
    logger.error(`error while quering folder by id: ${id}`, e);
  }
};

const saveNewFolder = async (folder) => {
  try {
    const folderDB = new FolderModel({ ...folder });
    const result = await folderDB.save();
    return result;
  } catch (e) {
    logger.error('error while saving new folder with following date', folder, e);
    return null;
  }
};

module.exports = {
  getFolders,
  getFolderById,
  saveNewFolder,
};
