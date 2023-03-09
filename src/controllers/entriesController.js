const EntriesService = require('../services/entriesService');

const getCollection = async (req, res) => {
  try {
    const {id} = req.params;
    const collectionId = await EntriesService.getCollection(id);
    res.status(200).json(collectionId);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllCollections = async (req, res) => {
  try {
    const collections = await EntriesService.getAllCollections();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json(error.message);
  } 
};

const createEntry = async (req, res) => {
  try {
    const {collectionId} = req.params;
    const { content_type_entries } = req.body;
    const newEntry = await EntriesService.createEntry(collectionId, content_type_entries);
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllEntriesByCollectionId = async (req, res) => {
  try {
    const {collectionId} = req.params;
    const entries = await EntriesService.getAllEntriesByCollectionId(collectionId);
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateEntry = async (req, res) => {
  try {
    const {entryId} = req.params;
    const { content_type_entries } = req.body;
    const updatedEntry = await EntriesService.updateEntry(entryId, content_type_entries);
    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteEntry = async (req, res) => {
  try {
    const {entryId} = req.params;
    const deletedEntry = await EntriesService.deleteEntry(entryId);
    res.status(200).json(deletedEntry);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { getCollection, getAllCollections, createEntry, getAllEntriesByCollectionId, updateEntry, deleteEntry };