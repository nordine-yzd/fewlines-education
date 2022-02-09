//import de express
import express from "express";

//donner express a la valeur de app
const app = express();

//dire ce qui est public d'acces
app.use(express.static("public"));

//page de notre serveur qui fait appel a index.html
app.get("/1", (request, response) => {
  response.sendFile("/Users/z5/Workspace/my-first-website/src/page.html");
});

//
app.get("/2", (request, response) => {
  response.sendFile("/Users/z5/Workspace/my-first-website/src/page2.html");
});

//
app.get("/3", (request, response) => {
  response.sendFile("/Users/z5/Workspace/my-first-website/src/page3.html");
});

// http://localhost:3000/azerty va console logué 'Azerty'
app.get("/2", (request, response) => {
  response.send("Azerty");
});

// app.get("/toto", (request, response) => {
//   response.sendFile("/images/toto.webp");
// });

// app.get("/meme", (request, response) => {
//   response.sendFile("/images/meme.jpg");
// });

//dire que c'est un serveur locale
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
