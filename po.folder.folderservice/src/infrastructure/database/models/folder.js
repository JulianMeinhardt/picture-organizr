
const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.ObjectId, required: true },
  name: { type: String },
  filepath: { type: String },
});

const FolderModel = mongoose.model('folder', folderSchema);

module.exports = FolderModel;
