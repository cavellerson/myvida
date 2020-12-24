const express = require('express');
const router = express.Router();


router.get('', (req, res) => {
    res.send('hello herro')
})

module.exports = router;
