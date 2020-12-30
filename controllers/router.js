const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js')
const foodPosts = require('../models/seed.js')



router.get('/', (req, res) => {
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

router.get('/seed', (req, res) => {
    Post.create(foodPosts, (error, posts) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(`${posts} have been added`);
            res.redirect('/gtgv/foods')
        }
    })

})


// Post.insert(foodPosts, (error, posts) => {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log(`${posts} have been added`);
//         res.redirect('/foods')
//     }
// })
//
// Post.find({}, (error, allPosts) => {
//     console.log(allPosts);
// })







module.exports = router;
