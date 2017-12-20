const Folder = require('../../domain/folder');
const mongoose = require('mongoose');

module.exports = {
  createFolder: async (body) => {
    const id = mongoose.Types.ObjectId();
    const folder = new Folder(id, body.name, body.filepath);
    if (folder.isValid()) {
      return folder;
    }
  },
  deleteFolderById: (id) => {
    console.log(`this will delete a folder with the id: ${id}`);
  },
};
