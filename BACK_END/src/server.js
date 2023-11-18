const express = require('express')
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