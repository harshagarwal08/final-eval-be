const EntriesRouter = require('express').Router();
const EntriesController = require('../controllers/entriesController');
const { validate } = require('../middlewares/authValidation');

EntriesRouter.route('/')
  .get(validate, EntriesController.getAllCollections);

EntriesRouter.route('/:id')
  .get(validate, EntriesController.getCollection);

EntriesRouter.route('/:collectionId/entries')
  .get(validate, EntriesController.getAllEntriesByCollectionId)
  .post(validate, EntriesController.createEntry);

EntriesRouter.route('/:collectionId/entries/:entryId')
  .put(validate, EntriesController.updateEntry)
  .delete(validate, EntriesController.deleteEntry);

module.exports = EntriesRouter;