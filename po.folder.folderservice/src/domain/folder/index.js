const uuidv1 = require('uuid/v1');

class Folder {
  constructor(name, filepath, id = uuidv1()) {
    this.id = id;
    this.name = name;
    this.filepath = filepath;
  }

  isValid() { return (this.id != null && this.name !== '' && this.filepath !== ''); }
}

module.exports = Folder;
