const ContentTypeRouter = require('express').Router();
const ContentTypeController = require('../controllers/contentTypeController');

ContentTypeRouter.route('/')
  .get(ContentTypeController.getContentTypes)
  .post(ContentTypeController.createContentType);

ContentTypeRouter.route('/:id')
  .get(ContentTypeController.getContentTypeById)
  .patch(ContentTypeController.updateContentTypeName)
  .post(ContentTypeController.addField)
  .delete(ContentTypeController.deleteField);

module.exports = ContentTypeRouter;