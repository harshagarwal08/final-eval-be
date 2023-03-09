const ContentTypeService = require('../services/contentTypeService');

const getContentTypes = async (req, res) => {
  try {
    const contentTypes = await ContentTypeService.getContentTypes();
    res.status(200).json(contentTypes);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createContentType = async (req, res) => {
  try {
    const { name } = req.body;
    const newContentType = await ContentTypeService.createContentType(name);
    res.status(201).json(newContentType);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateContentTypeName = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedContentType = await ContentTypeService.updateContentTypeName(id, name);
    res.status(200).json(updatedContentType);
  } catch (error) {
    res.status(500).json(error.message);
  }
};


const addField = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type } = req.body;
    const updatedContentType = await ContentTypeService.addField(id, name, type);
    res.status(200).json(updatedContentType);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteField = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const deletedContentType = await ContentTypeService.deleteField(id, name);
    res.status(200).json(deletedContentType);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { getContentTypes, createContentType, updateContentTypeName, addField, deleteField };