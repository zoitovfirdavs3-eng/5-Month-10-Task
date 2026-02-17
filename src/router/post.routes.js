const { Router } = require("express");
const postController = require("../controllers/post.controller");

const postRouter = Router();

postRouter.post("/create", postController.CREATE);

postRouter.get("/all", postController.GET);

postRouter.route("/:id")
.delete(postController.GET)
.put(postController.UPDATE)
.get(postController.GET);

module.exports = postRouter;