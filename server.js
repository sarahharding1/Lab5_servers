const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
  //req = request, res = response
  res.send("Welcome to Data Representation & Querying!");
});

app.get("/", (req, res) => {
  console.log("example");
});

app.get("/hello/:name", (req, res) => {
  //paramers passing in the url
  res.send("Hello " + req.params.name);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/api/movies", (req, res) => {
  //hardcoding movie data into server
  const movies = {
    movies: [
      {
        Title: "Avengers: Infinity War",
        Year: "2à8",
        imdbID: "tt454à56",
        Type: "movie",
        Poster:
          "https: màmedia-amazonàcom images M MV5BMjMxNjY2MDUOV5BMl5BanBnXkFtZTgwNzYMTUwNTM@à V SX3àààjpg",
      },
      {
        Title: "Captain America: Civil War",
        Year: "2à6",
        imdbID: "tt349882à",
        Type: "movie",
        Poster:
          "https: màmedia-amazonàcom images M MV5BMjQàMTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@à V SX3àààjpg",
      },
    ],
  };

  res.json({
    mymovies: movies,
    message: "Data Sent",
  });
});

app.get('/test', (req, res) => {
    res.sendFile(__dirname +'/index.html');
});

app.get('/name', (req, res) => {
    res.send('Hello '+req.query.fname+' '+req.query.lname);
});

// Post hides data from being show in the URL 
app.post('/name', (req,res) => {
    res.send('Goodbye ' + req.body.fname + ' ' + req.body.lname);
});