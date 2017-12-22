const Folder = require('../../domain/folder');
const folderRepository = require('../../adapter/persistence/folderRepository');

module.exports = {
  createFolder: async (body) => {
    // Maybe write own class for this, so we can use this validation schema at multiple levels
    let validationResult = {
      errors: [],
      result: null,
    };

    const folders = folderRepository.getFoldersByFilepath(body.filepath);
    const alreadyExistsFolderWithNameInFilepath = folders.include(item => item.name === body.name);
    if (alreadyExistsFolderWithNameInFilepath) {
      validationResult = {
        ...validationResult,
        errors: [
          ...validationResult.errors,
          'folder with the entered name already exists',
        ],
      };
    }

    const folder = new Folder(body.name, body.filepath);
    const folderValidationResult = folder.validate();
    if (folderValidationResult.result) {
      const createFolder = await folderRepository.saveNewFolder(folder);

      return {
        result: new Folder(createFolder.name, createFolder.filepath, createFolder.id),
      };
    }

    return {
      result: null,
      errors: validationResult,
    };
  },
  deleteFolderById: (id) => {
    console.log(`this will delete a folder with the id: ${id}`);
  },
};
