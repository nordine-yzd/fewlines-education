//import des modules
import request from "@fewlines-education/request";
import nunjucks from "nunjucks";
import express from "express";

//configuration des modules importé
//express
const app = express();
//nunjucks
app.set("view engine", "njk");

//dire ce qui est public d'acces
app.use(express.static("public"));

nunjucks.configure("views", { autoescape: true, express: app });

//

app.get("/", (req, res) => {
  res.send("Hello to my website");
});

//  http://videogame-api.fly.dev/platforms?page=2

// app.get("/platforms?page=2", (req, res) => {
//   // request("http://videogame-api.fly.dev/platforms?page=2", (error, body) => {
//   //   if (error) {
//   //     throw error;
//   //   }
//   //   const json = JSON.parse(body);
//   //   // console.log(json.platforms);
//   //   res.render("platforms.njk", { platt: json.platforms });
//   // });
//   res.send("hello ");
//   console.log(req.query);
// });

//

app.get("/platforms", (req, res) => {
  request("http://videogame-api.fly.dev/platforms?page=2", (error, body) => {
    if (error) {
      throw error;
    }
    const json = JSON.parse(body);
    // console.log(json.platforms);

    // res.render("platforms.njk", { platt: json.platforms });
  });
  console.log(req.query);

  res.send("hoye");
});

app.get("/platforms/:id", (req, res) => {
  const slug = req.params;
  // console.log(slug.id);
  // console.log(`https://videogame-api.fly.dev/games/platforms/${slug.id}`);
  request(
    `https://videogame-api.fly.dev/games/platforms/${slug.id}`,
    (error, body) => {
      if (error) {
        throw error;
      }
      const json = JSON.parse(body);
      // console.log(json.games);
      res.render("game_in_platforms.njk", { games: json.games });
    }
  );
});

app.get("/games/:id", (req, res) => {
  const slug = req.params;
  request(`https://videogame-api.fly.dev/games/${slug.id}`, (error, body) => {
    if (error) {
      throw error;
    }
    const json = JSON.parse(body);
    console.log(json);

    res.render("details_of_game.njk", { details: json });
  });
  // res.send("helloeeeee");
});

//----------------------------------------

//creation du serveur local
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

// pour catch tout ce qui ya apres les  " : "
// app.get("/test/:id", (req, res) => {
//   const re = req.params;
//   console.log(re);
//   res.send(re.id);
// });

//---------------CHUCK NORIS------------------

// app.get("/random-joke", (req, response) => {
//   request("https://api.chucknorris.io/jokes/random", (error, body) => {
//     if (error) {
//       throw error;
//     }
//     const joke = JSON.parse(body);

//     response.render("jokes.njk", { joke: joke.value });
//   });
// });
