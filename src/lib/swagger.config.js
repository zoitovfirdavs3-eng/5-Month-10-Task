const component = require("../docs/components");
const postDocs = require("../docs/post/post.docs");

module.exports = {
    openapi: "3.0.0",
    info: {
        title: "10-homework",
        version: "1.0.0"
    },
    components: {
        schemas: {
            ...component.schemas
        },
        parameters: {
            ...component.parameters
        }
    },
    paths: {
        ...postDocs.paths,
    }
}