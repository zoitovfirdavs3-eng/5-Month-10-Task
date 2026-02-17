const { globalError, ClientError } = require("shokhijakhon-error-handler");
const PostModel = require("../models/Post.model");
const { isValidObjectId } = require("mongoose");

module.exports = {
  async CREATE(req, res) {
    try {
      let newPost = req.body;
      let insertPost = await PostModel.create(newPost);
      return res
        .status(201)
        .json({
          message: "Post successfully created",
          status: 201,
          id: insertPost._id,
        });
    } catch (err) {
      return globalError(err, res);
    }
  },
  async GET(req, res) {
    try {
      let { id } = req.params;
      if (id) {
        if (!isValidObjectId(id))
          throw new ClientError("Invalid Object id", 400);
        const findPost = await PostModel.findById(id);
        if (!findPost) throw new ClientError("Post not found", 404);
        return res.json(findPost);
      }
      let posts = await PostModel.find();

      return res.json(posts);
    } catch (err) {
      return globalError(err, res);
    }
  },
  async UPDATE(req, res) {
    try {
      let { id } = req.params;
      if (!isValidObjectId(id)) throw new ClientError("Invalid Object id", 400);
      const findPost = await PostModel.findById(id);
      if (!findPost) throw new ClientError("Post not found", 404);
      let updateData = req.body;
      await findPost.updateOne(updateData);

      return res.json({ message: "Post successfully updated !", status: 200 });
    } catch (err) {
      return globalError(err, res);
    }
  },
  async DELETE(req, res) {
    try {
      let { id } = req.params;
      if (!isValidObjectId(id)) throw new ClientError("Invalid Object id", 400);
      const findPost = await PostModel.findById(id);
      if (!findPost) throw new ClientError("Post not found", 404);
      await findPost.deleteOne();

      return res.json({ message: "Post successfully updated !", status: 200 });
    } catch (err) {
      return globalError(err, res);
    }
  },
};
