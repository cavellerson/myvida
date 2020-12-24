const express = require('express');
const router = express.Router();
const Posts = require('../models/seed.js')

router.get('', (req, res) => {
    res.render('index.ejs',
        {
            Posts: Posts,
        }
    )
})

module.exports = router;
