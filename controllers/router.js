const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js')
const foodPosts = require('../models/seed.js')



router.get('', (req, res) => {
    res.render('index.ejs')
})

router.get('/foods', (req, res) => {
    res.render('foods.ejs')
})












module.exports = router;
