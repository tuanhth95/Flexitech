const connections = require("../config/database");

const getLoginpage = (req, res) => {
    res.render('login.ejs');
};
const authorizeSignin = async (req, res) => {
    console.log(req.body);
    console.log('select * from nguoidung where email = "' + req.body.emailfield + '" and matkhau = "' + req.body.passfield + '"');
    [result, fields] = await connections.execute(
        'select * from nguoidung where email = ? and matkhau = ?',
        [req.body.emailfield, req.body.passfield]
    )
    //console.log(result);
    if(result.length > 0){
        res.render('OK.ejs');
    }
}

module.exports = {
    getLoginPage : getLoginpage,
    authorizeSignin: authorizeSignin
}