var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var morgan = require("morgan");
var bcrypt = require('bcrypt');
var user = require("./user");
var app = express();
var mongoose = require('mongoose');

var port = process.env.PORT || 8000;

// DB Config
mongoose.connect('mongodb+srv://admin:homedoc123@homedoc.tcfbzjw.mongodb.net/users?retryWrites=true&w=majority');

// set morgan to log info about our requests for development use.
app.use(morgan("dev"));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(
    session({
        key: "user_sid",
        secret: "somerandomstuffs",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 300000,
        },
    })
);

app.get("/", (req, res) => {
    res.send("Hello World");
})

app
    .route("/usersignup")
    .post((req, res) => {

        var user = new User({
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        });
        user.save((err, docs) => {
            if (err) {
                res.redirect("/signup");
            } else {
                console.log(docs)
                req.session.user = docs;
                res.redirect("/");
            }
        });
    });

// start the express server
app.listen(port, () =>
    console.log(`App started on port ${port}`)
);