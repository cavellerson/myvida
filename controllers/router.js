const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js')
const foodPosts = require('../models/seed.js')



router.get('', (req, res) => {
    res.render('index.ejs',
        {
            foodposts: foodPosts,
        }
)
})












module.exports = router;
