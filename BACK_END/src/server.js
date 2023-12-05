const express = require('express')
<<<<<<< HEAD
const app = express();
const webRoutes = require('./routes/web');
const connections = require('./config/database')
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

const configViewEngine = require('./config/viewEngine')
configViewEngine(app);

app.use('/',webRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
=======
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
  console.log('ket noi thanh cong');
});
sql.query(
  'SELECT * FROM sanpham',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

app.use('/', webroute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
>>>>>>> origin/Phat
