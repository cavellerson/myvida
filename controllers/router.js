const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js')
const foodPosts = require('../models/seed.js')



router.get('/', (req, res) => {
    res.render('home.ejs')
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

router.get('/foods/newPost', (req, res) => {
    res.render('createPost.ejs')
})

router.post('/foods', (req, res) => {
    Post.create(req.body, (error, newPost) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(`${newPost} has been added`);
            res.redirect('/gtgv/foods')
        }
    })
})

router.get('/foods/:id', (req, res) => {
    Post.findById(req.params.id, (error, foundPost) => {
        res.render('postPage.ejs',
            {
                post: foundPost
            }
        )
    })
})


router.get('/foods/:id/edit', (req, res) => {
    Post.findById(req.params.id,(error, foundPost) => {
        res.render('edit.ejs',
            {
                post: foundPost
            }
        )
    })
})

router.put('/foods/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, {$set: {title:req.body.title, description: req.body.description, tag: req.body.tag }}, {new: true}, (error, updatePost) => {
        res.redirect('/gtgv/foods')
    })
})


router.delete('/foods/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect('/gtgv/foods');
    })
})




module.exports = router;
