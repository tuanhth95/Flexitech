const mysql = require('mysql2');
    const connections = require("../config/database");

    


    const getAccountDetail = (req, res) => {
    const userId = req.params.userId;

    connections.query('SELECT * FROM nguoidung WHERE id = ?', [userId], (error, results) => {
        if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.length === 0) {
        return res.status(404).json({ error: 'Account not found' });
        }

        const accountDetail = results[0];
        res.json(accountDetail);
    });
    };

    module.exports = {
    getAccountDetail,
    };
