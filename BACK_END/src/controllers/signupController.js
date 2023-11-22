const connections = require("../config/database");

const getSignupPage = (req, res) => {
    res.render('signup.ejs',{exist:false});
}
const signupRequest = async (req, res) => {
    console.log(req.body);
    [result, field] = await connections.execute('select * from nguoidung where email=?',[req.body.email]);
    console.log(result);
    if(result.length === 0){
        [result, field] = await connections.execute('insert into nguoidung(hoten, gioitinh, sdt, email, matkhau) values (?,?,?,?,?)',
            [req.body.name, req.body.username, req.body.phone, req.body.email, req.body.password]);
        console.log(result);
        if( result.affectedRows === 1) res.redirect('login');
    }
    if(result.length > 0) res.render('signup.ejs',{exist:true});
    res.render('signup.ejs',{exist:false});
}
module.exports = {
    getSignupPage: getSignupPage,
    signupRequest: signupRequest
};