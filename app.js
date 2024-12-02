const express = require("express");
const app = express();
const port = 3060;
const posts = require("./post");

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Server del mio blog");
});

app.get('/bacheca', (req, res) => {
    res.json({
        count: posts.length,
        posts
    });
});

app.listen(port, () => {
    console.log(`Server in ascolto`);
});