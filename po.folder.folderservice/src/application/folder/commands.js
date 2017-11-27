module.exports = {
  createFolder: async (body) => {
    console.log('this will create a folder');
    console.log('with this body', body);
  },
  deleteFolderById: (id) => {
    console.log(`this will delete a folder with the id: ${id}`);
  },
};
