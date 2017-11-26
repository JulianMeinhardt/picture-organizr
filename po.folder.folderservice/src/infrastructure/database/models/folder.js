const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: String,
  filepath: String,
});

const FolderModel = mongoose.model('folder', folderSchema);

module.exports = FolderModel;
