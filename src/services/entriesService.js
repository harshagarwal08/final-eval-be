const {entries} = require('../../database/models/index');

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

const updateEntryByCollectionId = async (collectionId, content_type_entries) => {
  const updatedEntry = await entries.update({
    content_type_entries: content_type_entries
  }, {
    where: {
      collection_id: collectionId
    },
    returning: true,
    plain: true
  });
  return updatedEntry[1].dataValues;
};

const deleteEntryByCollectionId = async (collectionId, entryId) => {
  const deletedEntry = await entries.destroy({
    where: {
      collection_id: collectionId,
      id: entryId
    }
  });
  return deletedEntry;
};

module.exports = { createEntry, getAllEntriesByCollectionId, updateEntryByCollectionId, deleteEntryByCollectionId };