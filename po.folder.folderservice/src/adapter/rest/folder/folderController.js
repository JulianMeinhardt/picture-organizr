const express = require('express');
const {
  getFolders,
  getFolderById,
  getSubfoldersByParentId
} = require('../../../application/folder/queries');
const {
  createFolder,
  updateFolderById,
  deleteFolderById,
} = require('../../../application/folder/commands');

const logger = require('../../../infrastructure/logger');

const router = express.Router();
// returns all folders
router.get('/', async (req, res) => {
  const folders = await getFolders();
  res.setHeader('status', 200);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(folders));
});

router.get('/:id', async (req, res) => {
  const folder = await getFolderById(req.params.id);
  res.setHeader('status', 200);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(folder));
});

router.get('/:id/subfolders', async (req, res) => {
  const subfolders = await getSubfoldersByParentId(req.params.id);
  res.setHeader('status', 200);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(subfolders));
});

router.post('/', async (req, res) => {
  try {
    const folderCommand = await createFolder(req.body);
    if (folderCommand.result !== null) {
      res.set('Content-Type', 'applcation/json')
        .status(201)
        .send(JSON.stringify(folderCommand.result));
    } else {
      res.set('Content-Type', 'application/json')
        .status(400)
        .send(JSON.stringify(folderCommand.errors));
    }
  } catch (e) {
    logger.error('error while creating folder', e);
    res.set('Content-Type', 'application/json')
      .status(500)
      .send();
  }
});

router.put('/:id', (req, res) => {
  const folder = updateFolderById(req.params.id, req.body);
  res.setHeader('status', 200); // or should be later status 204 if there was no update
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(folder));
});


router.delete('/:id', (req, res) => {
  const folder = deleteFolderById(req.params.id);
  res.setHeader('status', 200); // or should be later status 204 if there was no update
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(folder));
});

module.exports = router;
