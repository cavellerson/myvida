const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js')
const Posts = require('../models/seed.js')



router.get('', (req, res) => {
    res.render('index.ejs')
})

// router.get('/seed', (req, res) => {
//     Post.create(
//         Posts,
//         (error, posts) => {
//             if (error) {
//                 console.log(error);
//             }
//             else {
//                 console.log(`${Posts} have been created`);
//                 res.redirect('')
//             }
//         }
//     )
// })










module.exports = router;
