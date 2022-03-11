const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(
    cors({
        origin: '*',
    })
)

app.post('/auth/login', (req, res) => {
    const username = req.body.username;
    const token = jwt.sign(
        { 
            username: username,
        },
        "MY_PRIVATE_KEY",
        {
            expiresIn: 3600,
        }
    );
    res.json({
        username: username, 
        token: token,
    })
});
app.get('/profile/me', (req, res) => {
    const token = req.headers.authorization;
    if(!token) {
        res.status(401).send(' Missing token')
    }
    const jwtStr = token.split(" ") [1];
    jwt.verify(jwtStr,"MY_PRIVATE_KEY", (err, decoded) => {
        if(err) {
            res.status(401).send(" Invalid token")
        } else {
            res.json({
                username: decoded.username,
            });
        }
    });
});
// doesn't require login
app.get('classes', (req, res) => {});
// Require login
app.get('/teachers', (req, res) => {});

app.listen(5003, () => {
    console.log('App is running at 5003')
})