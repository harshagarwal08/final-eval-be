/* eslint-disable quotes */
const EntriesService = require("../../src/services/entriesService.js");
const { entries, collections } = require("../../database/models/index.js");

describe("Entries Service", () => {
  describe("getAllEntriesByCollectionId", () => {
    it("should return list of entries", async () => {
      const mockData = [
        {
          id: 1,
          title: "test",
          content: "test content",
          contentTypeId: 1,
        },
        {
          id: 2,
          title: "test2",
          content: "test content 2",
          contentTypeId: 1,
        },
      ];
      jest.spyOn(entries, "findAll").mockResolvedValue(mockData);
      jest.spyOn(collections, "findOne").mockResolvedValue({});
      const result = await EntriesService.getAllEntriesByCollectionId(1);
      expect(result).toEqual(mockData);
    });
  });
  describe("createEntry", () => {
    it("should return created entry", async () => {
      const mockData = {
        id: 1,
        title: "test",
        content: "test content",
        contentTypeId: 1,
      };
      jest.spyOn(entries, "create").mockResolvedValue(mockData);
      jest.spyOn(collections, "findOne").mockResolvedValue({});
      const result = await EntriesService.createEntry({
        title: "test",
        content: "test content",
        contentTypeId: 1,
      });
      expect(result).toEqual(undefined);
    });
  });
  describe("deleteEntry", () => {
    it("should return deleted entry by id", async () => {
      const mockData = {
        id: 1,
        title: "test",
        content: "test content",
        contentTypeId: 1,
      };
      jest.spyOn(entries, "destroy").mockResolvedValue(1);
      jest.spyOn(entries, "findOne").mockResolvedValue(mockData);
      jest.spyOn(collections, "findOne").mockResolvedValue({});
      const result = await EntriesService.deleteEntry(1);
      expect(result).toEqual(1);
    });
  });
});
