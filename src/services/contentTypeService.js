const {content_types, collections, entries} = require('../../database/models/index');

const createContentType = async (name) => {
  const contentType = {
    name: name,
    fields: {}
  };
  const newContentType = await content_types.create(contentType);
  const collection = {
    name: name,
    content_type_id: newContentType.id
  };
  await collections.create(collection);
  return newContentType.dataValues;
};

const getContentTypeById = async (id) => {
  const contentType = await content_types.findOne({
    where: {
      id: id
    }
  });
  return contentType;
};

const getContentTypes = async () => {
  const contentTypes = await content_types.findAll();
  return contentTypes;
};

const addField = async (id, name, type) => {
  const contentType = await content_types.findOne({
    where: {
      id: id
    }
  });
  const fields = contentType.fields;
  fields[name] = type;
  const updatedContentType = await content_types.update({
    fields: fields
  }, {
    where: {
      id: id
    },
    returning: true,
    plain: true
  });
  const collection = await collections.findOne({
    where: {
      content_type_id: id
    }
  });
  const collectionId = collection.id;

  const allEntries = await entries.findAll({
    where: {
      collection_id: collectionId
    }
  });
  for (let i = 0; i < allEntries.length; i++) {
    const entry = allEntries[i];
    const content_type_entries = entry.content_type_entries;
    content_type_entries[name] = '';
    await entries.update({
      content_type_entries: content_type_entries
    }, {
      where: {
        id: entry.id
      },
      returning: true,
      plain: true
    });
  }
  return updatedContentType[1].dataValues;
};

const updateContentTypeName = async (id, name) => {
  const updatedContentType = await content_types.update({
    name: name
  }, {
    where: {
      id: id
    },
    returning: true,
    plain: true
  });
  await collections.update({
    name: name
  }, {
    where: {
      content_type_id: id
    },
    returning: true,
    plain: true
  });
  return updatedContentType[1].dataValues;
};

const deleteField = async (id, name) => {
  const contentType = await content_types.findOne({
    where: {
      id: id
    }
  });
  const fields = contentType.fields;
  delete fields[name];
  const updatedContentType = await content_types.update({
    fields: fields
  }, {
    where: {
      id: id
    },
    returning: true,
    plain: true
  });
  const collection = await collections.findOne({
    where: {
      content_type_id: id
    }
  });
  const collectionId = collection.id;

  const allEntries = await entries.findAll({
    where: {
      collection_id: collectionId
    }
  });

  for(let i = 0; i < allEntries.length; i++) {
    const entry = allEntries[i];
    const content_type_entries = entry.content_type_entries;
    delete content_type_entries[name];
    await entries.update({
      content_type_entries: content_type_entries
    }, {
      where: {
        id: entry.id
      },
      returning: true,
      plain: true
    });
  }
  
  return updatedContentType[1].dataValues;
};

module.exports = { createContentType, getContentTypeById, getContentTypes, addField, updateContentTypeName, deleteField };