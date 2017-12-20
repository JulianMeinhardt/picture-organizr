const Folder = require('../../domain/folder');
const folderRepository = require('../../adapter/persistence/folderRepository');
const mongoose = require('mongoose');

module.exports = {
  createFolder: async (body) => {
    const id = mongoose.Types.ObjectId();
    const folder = new Folder(id, body.name, body.filepath);
    if (folder.isValid()) {
      const result = folderRepository.saveNewFolder(folder);
      return { ...result };
    }
  },
  deleteFolderById: (id) => {
    console.log(`this will delete a folder with the id: ${id}`);
  },
};
