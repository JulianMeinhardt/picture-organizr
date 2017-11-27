const Folder = require('../../domain/folder');

module.exports = {
  createFolder: async (body) => {
    console.log('this will create a folder');
    console.log('with this body', body);
    const folder = new Folder(body.name, body.filepath);
    // TODO: check if folder is valid
    // TODO: save folder to database
    return folder;
  },
  deleteFolderById: (id) => {
    console.log(`this will delete a folder with the id: ${id}`);
  },
};
