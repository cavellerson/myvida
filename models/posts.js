mongoose = require('mongoose');

const postSchema = new mongoose.Schema (
    {
        title: {type: String, required: true},
        description: {type: String},
        img: {type: String},
        tag: {type: String}
    }
)

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
