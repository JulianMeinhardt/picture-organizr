const logger = require('../../infrastructure/logger');
const FolderModel = require('../../infrastructure/database/models/folder');
const Folder = require('../../domain/folder');
const { ObjectId } = require('mongoose').Types;

const getFolders = async () => {
  try {
    const queryAllFoldersResult = await FolderModel.find({});
    const allFolders = queryAllFoldersResult.map(folder => new Folder(folder.name, folder.filepath));
    return allFolders;
  } catch (e) {
    logger.error('error while querying all folders', e);
  }
};

const getFolderById = async (id) => {
  try {
    const queryFolderByIDResult = await Folder.findOne({ _id: ObjectId(id) });
    const folder = new Folder(queryFolderByIDResult.name, queryFolderByIDResult.filepath);
    return folder;
  } catch (e) {
    logger.error(`error while quering folder by id: ${id}`, e);
  }
};

const saveNewFolder = async (folder) => {
  try {
    const folderDB = new FolderModel({
      _id: folder.id,
      name: folder.name,
      filepath: folder.filepath,
    });
    return await folderDB.save((err, data) => {
      if (err) {
        return {
          saveSuccessfull: false,
          data: null,
        };
      }
      return {
        saveSuccessfull: true,
        data,
      };
    });
  } catch (e) {
    logger.error('error while saving new folder with following date', folder, e);
  }
};

module.exports = {
  getFolders,
  getFolderById,
  saveNewFolder,
};
