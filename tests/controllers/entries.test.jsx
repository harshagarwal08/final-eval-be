/* eslint-disable quotes */
const entriesService = require("../../src/services/entriesService");
const entriesController = require("../../src/controllers/entriesController");

describe("Entries Controller", () => {
  describe("getAllEntriesByCollectionId", () => {
    it("should return status 200 and list of entries", async () => {
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
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      entriesService.getAllEntriesByCollectionId = jest
        .fn()
        .mockReturnValue(mockData);

      await entriesController.getAllEntriesByCollectionId(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });
    it("should return 500 status code if there is a server error", async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      entriesService.getAllEntriesByCollectionId = jest.fn().mockRejectedValue({
        message: "Internal Server Error",
      });
      await entriesController.getAllEntriesByCollectionId(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith("Internal Server Error");
    });
  });
  describe("createEntry", () => {
    it("should return status 201 and entry", async () => {
      const mockData = {
        id: 1,
        title: "test",
        content: "test content",
        contentTypeId: 1,
      };
      const req = {
        body: {
          title: "test",
          content: "test content",
          contentTypeId: 1,
        },
        params: {
          collectionId: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      entriesService.createEntry = jest.fn().mockReturnValue(mockData);

      await entriesController.createEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });
    it("should return 500 status code if there is a server error", async () => {
      const req = {
        params: {
          collectionId: 1,
        },
        body: {
          title: "test",
          content: "test content",
          contentTypeId: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      entriesService.createEntry = jest.fn().mockRejectedValue({
        message: "Internal Server Error",
      });
      await entriesController.createEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith("Internal Server Error");
    });
  });
  describe("updateEntry", () => {
    it("should return status 200 and entry", async () => {
      const mockData = {
        id: 1,
        title: "test",
        content: "test content",
        contentTypeId: 1,
      };
      const req = {
        params: {
          id: 1,
          collectionId: 1,
        },
        body: {
          title: "test",
          content: "test content",
          contentTypeId: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      entriesService.updateEntry = jest.fn().mockReturnValue(mockData);

      await entriesController.updateEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });
    it("should return 500 status code if there is a server error", async () => {
      const req = {
        params: {
          id: 1,
          collectionId: 1,
        },
        body: {
          title: "test",
          content: "test content",
          contentTypeId: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      entriesService.updateEntry = jest.fn().mockRejectedValue({
        message: "Internal Server Error",
      });
      await entriesController.updateEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith("Internal Server Error");
    });
  });
  describe("deleteEntry", () => {
    it("should return status 200 and entry", async () => {
      const mockData = {
        id: 1,
        title: "test",
        content: "test content",
        contentTypeId: 1,
      };
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      entriesService.deleteEntry = jest.fn().mockReturnValue(mockData);

      await entriesController.deleteEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });
    it("should return 500 status code if there is a server error", async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      entriesService.deleteEntry = jest.fn().mockRejectedValue({
        message: "Internal Server Error",
      });
      await entriesController.deleteEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith("Internal Server Error");
    });
  });
  describe("getAllCollections", () => {
    it("should return status 200 and list of collections", async () => {
      const mockData = [
        {
          id: 1,
          name: "test",
          description: "test description",
          contentTypes: [
            {
              id: 1,
              name: "test",
              description: "test description",
              fields: [
                {
                  id: 1,
                  name: "test",
                  description: "test description",
                  type: "text",
                },
              ],
            },
          ],
        },
      ];
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      entriesService.getAllCollections = jest.fn().mockReturnValue(mockData);

      await entriesController.getAllCollections(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });
    it("should return 500 status code if there is a server error", async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      entriesService.getAllCollections = jest.fn().mockRejectedValue({
        message: "Internal Server Error",
      });
      await entriesController.getAllCollections(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith("Internal Server Error");
    });
  });
  describe("getCollection", () => {
    it("should return status 200 and collection", async () => {
      const mockData = {
        id: 1,
        name: "test",
        description: "test description",
        contentTypes: [
          {
            id: 1,
            name: "test",
            description: "test description",
            fields: [
              {
                id: 1,
                name: "test",
                description: "test description",
                type: "text",
              },
            ],
          },
        ],
      };
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      entriesService.getCollection = jest.fn().mockReturnValue(mockData);

      await entriesController.getCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });
    it("should return 500 status code if there is a server error", async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      entriesService.getCollection = jest.fn().mockRejectedValue({
        message: "Internal Server Error",
      });
      await entriesController.getCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith("Internal Server Error");
    });
  });
});
