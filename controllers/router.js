const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js')



router.get('index.ejs', (req, res) => {
    res.render('index.ejs')
})

// router.get('', (req, res) => {
//     res.render('index.ejs')
// })
//
// router.get('/foods', (req, res) => {
//     Post.find({tag: "food"}, (error, allFoods) => {
//         res.render('foods.ejs',
//             {
//                 foodPosts: allFoods,
//             }
//         )
//     })
// })



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
//                 res.redirect('/gtgv')
//             }
//         }
//     )
// })

module.exports = router;
