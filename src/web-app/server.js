import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.static(path.join(__dirname, '/')));

app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/logout', function (req, res) {
    req.logOut();
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000);