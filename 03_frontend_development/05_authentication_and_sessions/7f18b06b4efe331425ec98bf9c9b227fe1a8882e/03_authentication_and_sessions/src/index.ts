//import et configuration de express nunjucks--------------------------------------------------
import express from "express";
import nunjucks from "nunjucks";
// import cookie from "cookie";

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

//configuration des path--------------------------------------------------
app.set("view engine", "njk");

app.use(express.static("public"));

//creation des routes
app.get("/home", (request, response) => {
  response.render("home");
});

app.get("/login", (request, response) => {
  response.render("login");
});

//pour recup des données--------------------------------------------------
const formParser = express.urlencoded({ extended: true });

app.post("/login", formParser, (request, response) => {
  const favoriteColor = "blue";

  // console.log(request.body); // va log ce que  le user ecris (reponse)
  // response.send(JSON.stringify(request.body));// renvoye la reponse sur la page web
  // response.send("welcome, " + request.body.username); //permet une fois que le user s'est identifié d'envoyer un messsage pour lui souahité welcome
  if (
    (request.body.username === dataLog[0].name &&
      request.body.password === dataLog[0].password) ||
    (request.body.username === dataLog[1].name &&
      request.body.password === dataLog[1].password) ||
    (request.body.username === dataLog[2].name &&
      request.body.password === dataLog[2].password)
  ) {
    response.set(
      "Set-Cookie",
      cookie.serialize("myCookie", favoriteColor, {
        maxAge: 3600, // This is the time (in seconds) that this cookie will be stored
      })
    );
    response.redirect("home");
  } else {
    response.redirect("login");
  }
});

//creation du server--------------------------------------------------
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

// import des data login
import { dataLogin } from "./dataLogin";
const dataLog = dataLogin;

//import de cookie
import cookie from "cookie";

//creation du cookie lorsqu'un utilisateur navigue sur la page /login :
app.get("/login", (request, response) => {
  const favoriteColor = "blue";

  response.set(
    "Set-Cookie",
    cookie.serialize("myCookie", favoriteColor, {
      maxAge: 3600, // This is the time (in seconds) that this cookie will be stored
    })
  );

  response.send("The cookie has been set");
});
