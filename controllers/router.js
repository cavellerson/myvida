const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js')
const foodPosts = require('../models/seed.js')



router.get('', (req, res) => {
    res.render('index.ejs')
})

router.get('/foods', (req, res) => {
    res.render('foods.ejs',
        {
            foodPosts: foodPosts,
        }
    )
})

router.get('/seed', (req, res) => {
    Post.create(foodPosts, (error, posts) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(`${posts} has been added`);
            res.redirect('')
        }
    })
})

console.log(foodPosts);









module.exports = router;
