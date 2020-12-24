const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js')

// router.get('', (req, res) => {
//     Post.find({}, (error, allPosts) => {
//         res.render('index.ejs',
//         {
//             posts: allPosts,
//         }
//     )
//     })
// })

router.get('', (req, res) => {
    res.send('hello this works?')
})

// router.get('/seed', (req, res) => {
//     Post.create(
//         [
//             {
//                 title: "Rigatoni Alla Vodka for lunch:)",
//                 description: "",
//                 img: "shorturl.at/abefC",
//                 tag: "food"
//             },
//             {
//                 title: "Froyo",
//                 description: "",
//                 img: "shorturl.at/swHY6",
//                 tag: "food"
//             },
//             {
//                 title: "Sushi is my fav",
//                 description: "",
//                 img: "shorturl.at/chBFO".
//                 tag: "food"
//             }
//         ],
//         (error, posts) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log(`${posts} has been added`);
//                 res.redirect('/weddit')
//             }
//         }
//     )
// })

module.exports = router;
