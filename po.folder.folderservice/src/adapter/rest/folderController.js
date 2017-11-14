const express = require('express');
const winston = require('winston');
const mongoose = require('mongoose');
const folderSchema = require('../models/folder');

const router = express.Router();
router.get('/', (req, res) => {
  res.setHeader('status', 200);
  res.setHeader('Content-Type', 'application/json');
});

router.get('/:id', (req, res) => {
  res.setHeader('status', 200);
  res.setHeader('Content-Type', 'application/json');
});

router.put('/:id', (req, res) => {

});

router.post('/', (req, res) => {
  const Folder = mongoose.model('Folder', folderSchema);
  const folder = new Folder({ ...req.body });
  // everything ok,
  folder.save((err) => {
    if (err) {
      winston.error('Error while saving Folder', err);
      res.sendStatus(500);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify('Sorry there was an error saving data to db.'));
    }

    res.set('Content-Type', 'application/json')
      .status(201)
      .send(JSON.stringify(req.body));
  });
});

module.exports = router;
