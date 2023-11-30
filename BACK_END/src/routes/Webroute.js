const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.get('/product', (req, res) => {
    // res.send('Đây là route mới được thêm')
    res.render('sample.ejs')
})
module.exports = router

