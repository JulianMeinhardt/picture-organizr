const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: String,
  filepath: String,
});

const Folder = mongoose.model('folder', folderSchema);

module.exports = Folder;
