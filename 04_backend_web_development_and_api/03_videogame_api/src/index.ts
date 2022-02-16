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

app.get("/platforms", (req, res) => {
  request("http://videogame-api.fly.dev/platforms", (error, body) => {
    if (error) {
      throw error;
    }
    const json = JSON.parse(body);
    // console.log(json.platforms);

    res.render("platforms.njk", { platt: json.platforms });
  });
});

app.get("/platforms/:id", (req, res) => {
  const slug = req.params;

  request(
    `http://videogame-api.fly.dev/games/platforms/${slug}`,
    (error, body) => {
      if (error) {
        throw error;
      }
      const json = JSON.parse(body);
      console.log(json);
      // res.render("platforms_game.njk", { platt: json.platforms });
    }
  );
});

// app.get("/games/platforms/:id", (req, res) => {
//   request(
//     "http://videogame-api.fly.dev/games/platforms/<platform_id>",
//     (error, body) => {
//       if (error) {
//         throw error;
//       }
//       const json = JSON.parse(body);
//       console.log(json.platforms);

//       res.render("platforms.njk", { platt: json.platforms });
//     }
//   );
// });

//----------------------------------------

app.get("/", (req, res) => {
  res.send("Hello to my website");
});

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
