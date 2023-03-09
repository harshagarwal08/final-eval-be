const EntriesRouter = require('express').Router();
const EntriesController = require('../controllers/entriesController');

EntriesRouter.route('/:collectionId/entries')
  .get(EntriesController.getAllEntriesByCollectionId)
  .post(EntriesController.createEntry);

EntriesRouter.route('/:collectionId/entries/:entryId')
  .put(EntriesController.updateEntry)
  .delete(EntriesController.deleteEntry);

module.exports = EntriesRouter;