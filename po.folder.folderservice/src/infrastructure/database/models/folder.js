const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: String,
  filepath: String,
});

module.exports = folderSchema;
