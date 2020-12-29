const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js')
const foodPosts = require('../models/seed.js')



router.get('', (req, res) => {
    res.render('index.ejs')
})

router.get('/foods', (req, res) => {
    Post.find({}, (error, allPosts) => {
        res.render('foods.ejs',
            {
                allPosts: allPosts
            }
        )
    })
})












module.exports = router;
