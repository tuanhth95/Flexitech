const express = require('express');
const app = express();
const webRoutes = require('./routes/web');
const connections = require('./config/database');
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const accountRoutes = require('./routes/accountRoutes'); // Thêm route cho account

const configViewEngine = require('./config/viewEngine');
configViewEngine(app);

app.use('/web', webRoutes);
app.use('/account', accountRoutes); // Sử dụng route mới cho account detail

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
