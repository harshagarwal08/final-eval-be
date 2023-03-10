/* eslint-disable quotes */
const contentTypeService = require("../../src/services/contentTypeService");
const contentTypeController = require("../../src/controllers/contentTypeController");
describe("Content Type Controller", () => {
  describe("getContentTypes", () => {
    it("should return status 200 and list of content types", async () => {
      const mockData = [
        {
          id: 1,
          name: "test",
          fields: [
            {
              name: "test",
              type: "text",
            },
            {
              name: "test2",
              type: "text",
            },
          ],
        },
        {
          id: 2,
          name: "test2",
          fields: [
            {
              name: "test2",
              type: "text",
            },
          ],
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
      contentTypeService.getContentTypes = jest.fn().mockReturnValue(mockData);

      await contentTypeController.getContentTypes(req, res);
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
      contentTypeService.getContentTypes = jest.fn().mockRejectedValue({
        message: "Internal Server Error",
      });
      await contentTypeController.getContentTypes(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: "Internal Server Error",
      });
    });
  });
  describe("getContentTypeById", () => {
    it("should return status 200 and the content type", async () => {
      const mockData = {
        id: 1,
        name: "test",
        fields: [
          {
            name: "test",
            type: "text",
          },
          {
            name: "test2",
            type: "text",
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
      contentTypeService.getContentTypeById = jest
        .fn()
        .mockReturnValue(mockData);

      await contentTypeController.getContentTypeById(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });
    // it("should return 404 status code if content type is not found", async () => {
    //   const req = {
    //     params: {
    //       id: 1,
    //     },
    //   };
    //   const res = {
    //     status: jest.fn().mockReturnThis(),
    //     json: jest.fn(),
    //   };
    //   contentTypeService.getContentTypeById = jest.fn().mockRejectedValue({
    //     message: "Not Found",
    //   });
    //   await contentTypeController.getContentTypeById(req, res);
    //   expect(res.status).toHaveBeenCalledWith(404);
    //   expect(res.json).toHaveBeenCalledWith("Not Found");
    // });
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
      contentTypeService.getContentTypeById = jest.fn().mockRejectedValue({
        message: "Internal Server Error",
      });
      await contentTypeController.getContentTypeById(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: "Internal Server Error",
      });
    });
  });
  describe("createContentType", () => {
    it("should return status 201 and the created content type", async () => {
      const mockData = {
        id: 1,
        name: "test",
        fields: [],
      };
      const req = {
        body: {
          name: "test",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      contentTypeService.createContentType = jest
        .fn()
        .mockReturnValue(mockData);

      await contentTypeController.createContentType(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });
    it("should return 500 status code if there is a server error", async () => {
      const req = {
        body: {
          name: "test",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      contentTypeService.createContentType = jest.fn().mockRejectedValue({
        message: "Internal Server Error",
      });
      await contentTypeController.createContentType(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: "Internal Server Error",
      });
    });
  });
  describe("updateContentTypeName", () => {
    it("should return status 200 and the updated content type", async () => {
      const mockData = {
        id: 1,
        name: "test",
        fields: [],
      };
      const req = {
        params: {
          id: 1,
        },
        body: {
          name: "test",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      contentTypeService.updateContentTypeName = jest
        .fn()
        .mockReturnValue(mockData);

      await contentTypeController.updateContentTypeName(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });
    it("should return 500 status code if there is a server error", async () => {
      const req = {
        params: {
          id: 1,
        },
        body: {
          name: "test",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      contentTypeService.updateContentTypeName = jest.fn().mockRejectedValue({
        message: "Internal Server Error",
      });
      await contentTypeController.updateContentTypeName(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: "Internal Server Error",
      });
    });
  });
  describe("addField", () => {
    it("should return status 200 and the content type with added field", async () => {
      const mockData = {
        id: 1,
        name: "test",
        fields: [
          {
            name: "test",
            type: "text",
          },
        ],
      };
      const req = {
        params: {
          id: 1,
        },
        body: {
          name: "test",
          type: "text",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      contentTypeService.addField = jest.fn().mockReturnValue(mockData);

      await contentTypeController.addField(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });
    it("should return 500 status code if there is a server error", async () => {
      const req = {
        params: {
          id: 1,
        },
        body: {
          name: "test",
          type: "text",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      contentTypeService.addField = jest.fn().mockRejectedValue({
        message: "Internal Server Error",
      });
      await contentTypeController.addField(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: "Internal Server Error",
      });
    });
  });
  describe("deleteField", () => {
    it("should return status 200 and the content type with deleted field", async () => {
      const mockData = {
        id: 1,
        name: "test",
        fields: [],
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      };
      const req = {
        params: {
          id: 1,
        },
        body: {
          name: "test",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      contentTypeService.deleteField = jest.fn().mockReturnValue(mockData);

      await contentTypeController.deleteField(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });
    it("should return 500 status code if there is a server error", async () => {
      const req = {
        params: {
          id: 1,
        },
        body: {
          name: "test",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      contentTypeService.deleteField = jest.fn().mockRejectedValue({
        message: "Internal Server Error",
      });
      await contentTypeController.deleteField(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: "Internal Server Error",
      });
    });
  });
});
