//configuration express nunjucks
import express from "express";
import nunjucks from "nunjucks";
// import cookie from "cookie";

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
//configuration des path
app.set("view engine", "njk");

app.use(express.static("public"));

//creation des pages
app.get("/home", (request, response) => {
  // response.send("hello world");
  // response.send("yooo je suis le .send");
  response.render("home");
});

app.get("/layout", (request, response) => {
  response.render("layout");
});

app.get("/options", (request, response) => {
  response.render("options");
  console.log(request.body);
});

// app.get("/post", (request, response) => {
//   response.render("post");
//   console.log(request.body);
// });

// const monObjet = [{ name: "alchimiste" }, { name: "naruto" }];

// app.get("/monObjet/:name", (req, res) => {
//   // res.send(JSON.stringify(req.params));
//   res.send(monObjet[1].name);
//   // console.log(req.params);
//   // console.log(res.cookie);
// });

//
const formParser = express.urlencoded({ extended: true });
// app.post("/resources", formParser, (request, response) => {
//   // request.body contains an object with our named fields
// });

app.post("/post", formParser, (request, response) => {
  // console.log(request.body);
  // console.log(request.body);
  response.send("welcome, " + request.body.username); //permet une fois que le user s'est identifié d'envoyer un messsage pour lui souahité welcome

  // request.body; // contains an object with our named fields
  // response.send(JSON.stringify(request.body));
});

//----------------------------------------------------------------------------

// //creation du cookie
// app.get("/add-cookie", (request, response) => {
//   const favoriteColor = "blue";

//   response.set(
//     "Set-Cookie",
//     cookie.serialize("myCookie", favoriteColor, {
//       maxAge: 3600, // This is the time (in seconds) that this cookie will be stored
//     })
//   );

//   response.send("The cookie has been set");
// });

// app.get("/view-cookie", (request, response) => {
//   const cookies = cookie.parse(request.get("cookie") || "");
//   response.send(cookies.myCookie);
// });

// app.get("/clear-cookie", (request, response) => {
//   response.set(
//     "Set-Cookie",
//     cookie.serialize("myCookie", "", {
//       maxAge: 0,
//     })
//   );
//   response.send("myCookie has been deleted");
// });

//creation du server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
