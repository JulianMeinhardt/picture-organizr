const express = require('express');

const router = express.Router();
const folderController = require('./folder/folderController');

// add other controllers

router.use('/folder', folderController);

router.get('/', (req, res) => {
  res.setHeader('status', 200);
  res.setHeader('Content-Type', 'application/json');
});

module.exports = router;
