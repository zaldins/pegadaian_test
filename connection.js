// import mysql module :
const mysql = require('mysql');

// configuration :
const con = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'pegadaian'
});

// connection exeption
con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
