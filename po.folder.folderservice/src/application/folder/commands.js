const Folder = require('../../domain/folder');
const folderRepository = require('../../adapter/persistence/folderRepository');

module.exports = {
  createFolder: async (body) => {

    const result = Folder.create(body.name, body.filepath);
    if (result.isValid) {
      const result = await folderRepository.saveNewFolder(result.folder);

      return new Folder(result.name, result.filepath, result.id);
    }

    return null;
  },
  deleteFolderById: (id) => {
    console.log(`this will delete a folder with the id: ${id}`);
  },
};
