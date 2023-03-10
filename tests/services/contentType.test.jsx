/* eslint-disable quotes */
const ContentTypeService = require("../../src/services/contentTypeService.js");
const {
  content_types,
  collections,
} = require("../../database/models/index.js");

describe("Content Type Service", () => {
  describe("createContentType", () => {
    it("should return created content type", async () => {
      const mockData = {
        id: 1,
        name: "test",
        fields: {},
      };
      jest.spyOn(content_types, "create").mockResolvedValue({
        mockData,
      });
      jest.spyOn(collections, "create").mockResolvedValue({});
      const result = await ContentTypeService.createContentType("test");
      expect(result).toEqual(undefined);
    });
  });
  describe("getContentTypes", () => {
    it("should return list of content types", async () => {
      const mockData = [
        {
          id: 1,
          name: "test",
          fields: {},
        },
        {
          id: 2,
          name: "test2",
          fields: {},
        },
      ];
      jest.spyOn(content_types, "findAll").mockResolvedValue(mockData);
      const result = await ContentTypeService.getContentTypes();
      expect(result).toEqual(mockData);
    });
  });
  describe("getContentTypeById", () => {
    it("should return content type by id", async () => {
      const mockData = {
        id: 1,
        name: "test",
        fields: {},
      };
      jest.spyOn(content_types, "findOne").mockResolvedValue(mockData);
      const result = await ContentTypeService.getContentTypeById(1);
      expect(result).toEqual(mockData);
    });
  });
});
