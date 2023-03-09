const ContentTypeRouter = require('express').Router();
const ContentTypeController = require('../controllers/contentTypeController');

ContentTypeRouter.route('/')
  .get(ContentTypeController.getContentTypes)
  .post(ContentTypeController.createContentType);

ContentTypeRouter.route('/:id')
  .get(ContentTypeController.getContentTypeById)
  .post(ContentTypeController.addField)
  .patch(ContentTypeController.updateContentTypeName)
  .delete(ContentTypeController.deleteField);

module.exports = ContentTypeRouter;