
const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String },
  filepath: { type: String },
});

const FolderModel = mongoose.model('folder', folderSchema);

module.exports = FolderModel;
