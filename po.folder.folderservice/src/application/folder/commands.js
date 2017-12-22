const Folder = require('../../domain/folder');
const folderRepository = require('../../adapter/persistence/folderRepository');

module.exports = {
  createFolder: async (body) => {
    const folder = new Folder(body.name, body.filepath);
    if (folder.isValid()) {
      const result = await folderRepository.saveNewFolder(folder);

      return new Folder(result.name, result.filepath, result.id);
    }

    return null;
  },
  deleteFolderById: (id) => {
    console.log(`this will delete a folder with the id: ${id}`);
  },
};
