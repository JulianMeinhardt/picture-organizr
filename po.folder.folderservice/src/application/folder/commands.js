const Folder = require('../../domain/folder');
const folderRepository = require('../../adapter/persistence/folderRepository');

module.exports = {
  createFolder: async (body) => {
    // Maybe write own class for this, so we can use this validation schema at multiple levels
    let validationResult = {
      errors: [],
      result: null,
    };

    const folders = await folderRepository.getSubfoldersByParentId(body.parentId);
    const alreadyExistsFolderWithNameInFilepath = folders.some(item => item.name === body.name);
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
    validationResult = {
      ...validationResult,
      errors: [
        ...validationResult.errors,
        ...folder.validate().errors,
      ],
    };
    if (validationResult.errors.length === 0) {
      await folderRepository.saveNewFolder(folder);
      return {
        result: folder,
      };
    }

    return validationResult;
  },
  deleteFolderById: (id) => {
    console.log(`this will delete a folder with the id: ${id}`);
  },
};
