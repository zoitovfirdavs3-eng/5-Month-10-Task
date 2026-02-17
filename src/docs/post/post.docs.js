module.exports = {
    paths: {
        "/api/posts/create": {
            post: {
                summary: "Create a new post",
                tags: ["Posts"],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {$ref: "#/components/schemas/Post"}
                        }
                    }
                },
                responses: {
                    201: {description: "Post successfully created"},
                    400: {description: "Validation error !"}
                }
            }
        },
        "/api/posts/all": {
            get: {
                summary: "Posts list",
                tags: ["Posts"],
                responses: {
                    200: {description: "Posts list"}
                }
            }
        },
        "/api/posts/{id}": {
            get: {
                summary: "Get one post",
                tags: ["Posts"],
                parameters: [
                    {$ref: "#/components/parameters/PostId"}
                ],
                responses: {
                    400: {description: "Invalid Object id"},
                    404: {description: "Post not found"},
                    200: {description: "Post"}
                }
            },
            put: {
                summary: "Update one post",
                tags: ["Posts"],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {$ref: "#/components/schemas/Post"}
                        }
                    }
                },
                parameters: [
                    {$ref: "#/components/parameters/PostId"}
                ],
                responses: {
                    200: {description: "Post successfully updated"},
                    400: {description: "Invalid ObjectId"},
                    404: {description: "Post not found"}
                }
            },
            delete: {
                summary: "Delete post by id",
                tags: ["Posts"],
                parameters: [
                    {$ref: "#/components/parameters/PostId"}
                ],
                responses : {
                    200: { description: "Post successfully deleted" },
                    400: { description: "Invalid ObjectId" },
                    404: { description: "Post not found" },
                }
            }
        }
    }
}