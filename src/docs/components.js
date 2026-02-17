module.exports = {
  schemas: {
    Post: {
      type: "object",
      properties: {
        post_title: {
          type: "string",
          default: "Test post title",
          minLength: 2,
        },
        post_description: {
          type: "string",
          default: "Test post description",
          minLength: 10,
        },
      },
      required: ["post_title", "post_description"],
    },
  },
  parameters: {
    PostId: {
      name: "id",
      in: "path",
      required: true,
      schema: { type: "string" },
      description: "Mongodb ObjectId",
      default: "699455be43038cb6bc0f8300",
    },
  },
};
