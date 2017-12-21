
class Folder {
  constructor(_id, name, filepath) {
    this._id = _id;
    this.name = name;
    this.filepath = filepath;
  }

  isValid() { return (this._id != null && this.name !== '' && this.filepath !== ''); }
}

module.exports = Folder;
