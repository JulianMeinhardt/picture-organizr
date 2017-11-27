const folderRepository = require('../../adapter/persistence/folderRepository');

module.exports = {
  getFolders: async () => {
    const folders = await folderRepository.getFolders();
    return folders;
  },
  getFolderById: async (id) => {
    const folder = await folderRepository.getFolderById(id);
    return folder;
  },
};
