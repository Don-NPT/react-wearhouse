const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
    user: "itcs212",
    password: "itcs212",
    host: "localhost",
    database: "wearhouse"
});

app.post('/register', (req, res)=>{

    const fname = req.body.fname;
    const lname = req.body.lname;
    const username= req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const age = req.body.age;
    const address = req.body.address;

    db.query("INSERT INTO user (fname, lname, address, age, email, username, password) VALUES (?,?,?,?,?,?,?)", [fname, lname, address, age, email, username, password], (err, result)=>{
        console.log(err);
        res.send(result);
    });
});

app.post('/login', (req, res)=>{

    const username= req.body.username;
    const password = req.body.password;

    db.query("SELECT username, password FROM user WHERE username = ? AND password = ?", [username, password], (err, result)=>{
        if(err) console.log(err);
        if(result.length > 0){
            console.log(result);
            res.send(result);
        }else{
            console.log("Incorrect username or password");
            res.send({message:"Incorrect username or password"});
        }
    });
});

// search for products
app.get('/search', (req, res)=>{

    db.query("SELECT * FROM product", (err, result)=>{
        if(err) console.log(err);
        if(result.length > 0){
            console.log(result);
            res.send(result);
        }else{
            console.log("Cannot select from DB");
            res.send({message:"Cannot select from DB"});
        }
    });
});

// Update user
app.put('/user', function (req, res) {
    let user_id = req.body.userinfo.id;
    let user = req.body.user;

    if (!user_id || !user) {
        return res.status(400).send({ error: user, message: 'Please provide user information' });
    }
    db.query("UPDATE user SET ? WHERE id = ?", [user, user_id], function (error,results) {
        if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'User has been updated successfully.'});
    });
});

// Delete User
app.delete('/user/:id', function (req, res) {
    let id = req.params.id;
    
    db.query('DELETE FROM user WHERE id = ?', id, function (error, results){
        if (error) console.log(error);
        return res.send({ error: false, data: results.affectedRows, message: 'User has been deleted successfully.' });
    });
});

// View all users
app.get('/user', function (req, res) {

    db.query('SELECT * FROM user', function (err, result) {
        if(err) console.log(err);
        if(result.length > 0){
            console.log(result);
            res.send(result);
        }else{
            console.log("Cannot select from DB");
            res.send({message:"Cannot select from DB"});
        }
    });
});

app.listen(3030, () => {
    console.log("Server is running on port 3030");
});