const ContentTypeService = require('../services/contentTypeService');
const HTTPError = require('../utils/errors/httpError');

const catchBlockHandler = (error, res) => {
  if (error instanceof HTTPError) {
    res.status(error.code).json({ message: error.message });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getContentTypes = async (req, res) => {
  try {
    const contentTypes = await ContentTypeService.getContentTypes();
    res.status(200).json(contentTypes);
  } catch (error) {
    catchBlockHandler(error, res);
  }
};

const getContentTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const contentType = await ContentTypeService.getContentTypeById(id);
    res.status(200).json(contentType);
  } catch (error) {
    catchBlockHandler(error, res);
  }
};

const createContentType = async (req, res) => {
  try {
    const { name } = req.body;
    const newContentType = await ContentTypeService.createContentType(name);
    res.status(201).json(newContentType);
  } catch (error) {
    catchBlockHandler(error, res);
  }
};

const updateContentTypeName = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedContentType = await ContentTypeService.updateContentTypeName(id, name);
    res.status(200).json(updatedContentType);
  } catch (error) {
    catchBlockHandler(error, res);
  }
};

const addField = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type } = req.body;
    const updatedContentType = await ContentTypeService.addField(id, name, type);
    res.status(200).json(updatedContentType);
  } catch (error) {
    catchBlockHandler(error, res);
  }
};

const deleteField = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const deletedContentType = await ContentTypeService.deleteField(id, name);
    res.status(200).json(deletedContentType);
  } catch (error) {
    catchBlockHandler(error, res);
  }
};

module.exports = { getContentTypes, getContentTypeById, createContentType, updateContentTypeName, addField, deleteField };