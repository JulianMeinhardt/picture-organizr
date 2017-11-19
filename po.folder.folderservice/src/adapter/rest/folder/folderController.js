const express = require('express');
const {
  getFolders,
  getFolderById,
} = require('../../../application/folder/queries');
const {
  createFolder,
  updateFolderById,
  deleteFolderById,
} = require('../../../application/folder/commands');

const router = express.Router();
// returns all folders
router.get('/', (req, res) => {
  const folders = getFolders();
  res.setHeader('status', 200);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(folders));
});

router.get('/:id', (req, res) => {
  const folder = getFolderById(req.params.id);
  res.setHeader('status', 201);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(folder));
});

router.put('/:id', (req, res) => {
  const folder = updateFolderById(req.params.id, req.body);
  res.setHeader('status', 200); // or should be later status 204 if there was no update
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(folder));
});

router.post('/', (req, res) => {
  const folder = createFolder(req.body);
  res.set('Content-Type', 'applcation/json')
    .status(201)
    .send(JSON.stringify(folder));
});

router.delete('/:id', (req, res) => {
  const folder = deleteFolderById(req.params.id);
  res.setHeader('status', 200); // or should be later status 204 if there was no update
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(folder));
});

module.exports = router;
