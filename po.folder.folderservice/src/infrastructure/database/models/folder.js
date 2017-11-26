const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  filepath: { type: String, required: true },
});

const FolderModel = mongoose.model('folder', folderSchema);

module.exports = FolderModel;
