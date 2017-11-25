const folderRepository = require('../../adapter/persistence/folderRepository');

module.exports = {
  getFolders: () => {
    const folders = folderRepository.getFolders();
    return folders;
  },
  getFolderById: (id) => {
    console.log(`this will return a folder with the following id:${id}`);
  },
};
