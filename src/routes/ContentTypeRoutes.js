const ContentTypeRouter = require('express').Router();
const ContentTypeController = require('../controllers/contentTypeController');
const { validate } = require('../middlewares/authValidation');

ContentTypeRouter.route('/')
  .get(validate, ContentTypeController.getContentTypes)
  .post(validate, ContentTypeController.createContentType);

ContentTypeRouter.route('/:id')
  .get(validate, ContentTypeController.getContentTypeById)
  .patch(validate, ContentTypeController.updateContentTypeName)
  .post(validate, ContentTypeController.addField)
  .delete(validate, ContentTypeController.deleteField);

module.exports = ContentTypeRouter;