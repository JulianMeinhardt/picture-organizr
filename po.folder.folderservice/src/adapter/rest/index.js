const express = require('express');
const logger = require('../../infrastructure/logger');

const router = express.Router();
const folderController = require('./folder/folderController');

// add other controllers

router.use('/folder', folderController);

router.get('/', (req, res) => {
  logger.info('lets see if this works');
  res.setHeader('status', 200);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify('hallo das ist der Start'));
});

module.exports = router;
