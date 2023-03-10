const {entries, collections} = require('../../database/models/index');

const getCollection = async (id) => {
  const collection = await collections.findOne({
    where: {
      id: id
    }
  });
  return collection;
};

const getAllCollections = async () => {
  const allCollections = await collections.findAll();
  return allCollections;
};

const createEntry = async (collectionId, content_type_entries) => {
  const newEntry = await entries.create({
    collection_id: collectionId,
    content_type_entries: content_type_entries
  });
  return newEntry.dataValues;
};

const getAllEntriesByCollectionId = async (collectionId) => {
  const allEntries = await entries.findAll({
    where: {
      collection_id: collectionId
    }
  });
  return allEntries;
};

const updateEntry = async (entryId, content_type_entries) => {
  const updatedEntry = await entries.update({
    content_type_entries: content_type_entries
  }, {
    where: {
      id: entryId
    },
    returning: true,
    plain: true
  });
  return updatedEntry[1].dataValues;
};

const deleteEntry = async (entryId) => {
  const deletedEntry = await entries.destroy({
    where: {
      id: entryId
    }
  });
  return deletedEntry;
};

module.exports = { getCollection, getAllCollections, createEntry, getAllEntriesByCollectionId, updateEntry, deleteEntry };