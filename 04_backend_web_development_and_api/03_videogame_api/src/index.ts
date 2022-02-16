//import des modules
import request from "@fewlines-education/request";
import nunjucks from "nunjucks";
import express from "express";
import { platform } from "os";

//configuration des modules importé
//express
const app = express();
//nunjucks
app.set("view engine", "njk");

nunjucks.configure("views", { autoescape: true, express: app });

// app.get("/random-joke", (req, response) => {
//   request("https://api.chucknorris.io/jokes/random", (error, body) => {
//     if (error) {
//       throw error;
//     }
//     const joke = JSON.parse(body);

//     response.render("jokes.njk", { joke: joke.value });
//   });
// });

//
app.get("/platforms", (req, res) => {
  request("http://videogame-api.fly.dev/platforms", (error, body) => {
    if (error) {
      throw error;
    }
    const json = JSON.parse(body);
    console.log(json.platforms);

    res.render("platforms.njk", { platt: json.platforms });
  });
});

//

//creation du serveur local
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

//

// request("https://videogame-api.fly.dev/games?page=2", (error, body) => {
//   if (error) {
//     throw error;
//   }
//   const result = JSON.parse(body);
//   result.games; // The next 20 first Games of the API
//   result.total; // This is still the same total number
// });

//----------------------------------------

app.get("/", (req, res) => {
  // request("https://videogame-api.fly.dev/games", (error, body) => {
  //   if (error) {
  //     throw error;
  //   }

  //   const result = JSON.parse(body);
  //   console.log(result);

  //   result.games; // 20 first Games of the API
  //   result.total; // Total number of Games. You can get the number of pages with a division
  // });
  res.send("Hello to my website");
});

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
