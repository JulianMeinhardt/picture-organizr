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

module.exports = {
  getFolders,
  getFolderById,
};
