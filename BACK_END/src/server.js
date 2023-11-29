const express = require('express')
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/ViewEngine')
const webroute = require('./routes/Webroute')
const mysql = require('mysql');

const app = express()
const port = process.env.PORT || 3000

configViewEngine(app);

const sql = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: '',
  database: 'flexible'
});
sql.connect(function (err){
  //nếu có lỗi thì in ra
  if (err) throw err.stack;
  //nếu thành công
  console.log('ket noi thanh cong');
  
});
sql.query(
  'SELECT * FROM sanpham',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

app.use('/v1', webroute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})