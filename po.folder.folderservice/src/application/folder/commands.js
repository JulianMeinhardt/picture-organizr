const Folder = require('../../domain/folder');
const folderRepository = require('../../adapter/persistence/folderRepository');
const mongoose = require('mongoose');

module.exports = {
  createFolder: async (body) => {
    // TODO: This should be refactored, cause id should not be relevant to db
    const id = mongoose.Types.ObjectId();
    const folder = new Folder(id, body.name, body.filepath);
    if (folder.isValid()) {
      const result = await folderRepository.saveNewFolder(folder);

      return new Folder(result.id, result.name, result.filepath);
    }

    return null;
  },
  deleteFolderById: (id) => {
    console.log(`this will delete a folder with the id: ${id}`);
  },
};
