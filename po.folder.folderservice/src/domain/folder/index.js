const uuidv1 = require('uuid/v1');

class Folder {
  constructor(name, parentId, id = uuidv1()) {
    this.id = id;
    this.name = name;
    this.parentId = parentId;
    // maybe in future
    // this.folderIcon
    // userIdsWithReadingRights
    // userIdsWithWritingRights
  }

  validate() {
    let validationResult = {
      errors: [],
      result: true,
    };

    if (this.id == null || this.id === '') {
      validationResult = {
        ...validationResult,
        errors: [
          ...validationResult.errors,
          'id is invalid',
        ],
        result: false,
      };
    }

    if (this.name == null || this.name === '') {
      validationResult = {
        ...validationResult,
        errors: [
          ...validationResult.errors,
          'name is invalid',
        ],
        result: false,
      };
    }

    if (this.parentId == null || this.parentId === '') {
      validationResult = {
        ...validationResult,
        errors: [
          ...validationResult.errors,
          'parentId is invalid',
        ],
        result: false,
      };
    }

    return validationResult;
  }
}

module.exports = Folder;
