const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js')
const foodPosts = require('../models/seed.js')



router.get('', (req, res) => {
    res.render('index.ejs',
        {
            foodposts: [
                {
                    title: "Rigatoni Alla Vodka for lunch:)",
                    description: "",
                    img: "shorturl.at/abefC",
                    tag: "food"
                },
                {
                    title: "Froyo",
                    description: "",
                    img: "shorturl.at/swHY6",
                    tag: "food"
                },
                {
                    title: "Sushi is my fav",
                    description: "",
                    img: "shorturl.at/chBFO".
                    tag: "food"
                }
            ]
,
        }
    )
})












module.exports = router;
