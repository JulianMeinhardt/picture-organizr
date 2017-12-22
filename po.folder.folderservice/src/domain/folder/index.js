const uuidv1 = require('uuid/v1');

class Folder {
  constructor(name, filepath, id = uuidv1()) {
    this.id = id;
    this.name = name;
    this.filepath = filepath;
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

    if (this.filepath == null || this.filepath === '') {
      validationResult = {
        ...validationResult,
        errors: [
          ...validationResult.errors,
          'filepath is invalid',
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

    return validationResult;
  }
}

module.exports = Folder;
