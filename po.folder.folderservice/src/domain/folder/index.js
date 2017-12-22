const uuidv1 = require('uuid/v1');

class Folder {
  constructor(name, filepath, id = uuidv1()) {
    this.id = id;
    this.name = name;
    this.filepath = filepath;
  }

  create = (id, name, filepath) => {
    const folder = new Folder(filepath, name, id);
    return {
      ...folder,
    };
  }

  isValid() { return (this.id != null && this.name !== '' && this.filepath !== ''); }

  validate() {
    this.id;
    return true;
  }
}

module.exports = Folder;
