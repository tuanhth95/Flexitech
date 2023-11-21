const connections = require("../config/database");

const getLoginpage = (req, res) => {
    res.render('login.ejs');
};
const authorizeSignin = (req, res) => {
    console.log(req.body);
    console.log('select * from nguoidung where email = "' + req.body.emailfield + '" and matkhau = "' + req.body.passfield + '"');
    connections.query(
        'select * from nguoidung where email = "' + req.body.emailfield + '" and matkhau = "' + req.body.passfield + '"',
        function(err, results, fields){
            if(results.length > 0) {
                res.render('OK.ejs');
            }
        }
    )
}

module.exports = {
    getLoginPage : getLoginpage,
    authorizeSignin: authorizeSignin
}