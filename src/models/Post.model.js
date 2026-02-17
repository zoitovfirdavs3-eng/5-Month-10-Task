const { Schema, model } = require("mongoose");

const postSchema = new Schema({
    post_title: {
        type: String,
        required: true
    },
    post_description: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model("posts", postSchema)