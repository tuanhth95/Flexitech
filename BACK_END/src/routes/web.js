const express = require('express');
const getLoginPage  = require('../controllers/loginController');
const connections = require('../config/database');

const router = express.Router();

router.get('/login', getLoginPage);

// router.get('/hello', (req, res) => {
//     res.send('hello world!');
// });
// router.get('/nguoidung', (req, res) => {
//     connections.query(
//         'select * from nguoidung',
//         function(err, results, fields) {
//             res.send(JSON.stringify(results));
//         }
//     )
// });
module.exports = router;