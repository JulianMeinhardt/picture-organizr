
class Folder {
  constructor(id, name, filepath) {
    this.id = id;
    this.name = name;
    this.filepath = filepath;
  }

  isValid = () => (this.id != null && this.name !== '' && this.filepath !== '');
}

module.exports = Folder;
