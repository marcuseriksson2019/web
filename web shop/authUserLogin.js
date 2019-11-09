const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    if (req.url == "/userLogin" && req.method == "POST") {
        if (req.body != null) {
            let userToken = jwt.sign({ data: req.body.name, expiresIn: "1h" }, req.body.password);
            res.json({ success: true, token: userToken });
            console.log("It works");
        } else {
            res.json({ success: false });
            console.log("It definately does not work");
        }
        res.end();
        return;
    } 
    next();
}