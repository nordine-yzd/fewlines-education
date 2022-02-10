//configuration express nunjucks
import express from "express";
import nunjucks from "nunjucks";

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
});

//
// const formParser = express.urlencoded({ extended: true });

// app.post("/resources", formParser, (request, response) {
//   request.body()
// });

//creation du server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
