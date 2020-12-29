const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js')




router.get('', (req, res) => {
    res.render('index.ejs')
})












module.exports = router;
