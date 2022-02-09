// Configure nunjucks
import express from "express";
import nunjucks from "nunjucks";

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

//configure express
app.set("view engine", "njk");

//page home.njk
app.get("/", (request, response) => {
  response.render("home"); // 🔎 See? "home"!
});

//page forLoop.njk
app.get("/loop", (request, response) => {
  const elements = ["un", "deux", "trois", "quatre"];
  response.render("forLoop", { elements });
});

//page product.njk
app.get("/product", (request, response) => {
  const product = {
    name: "My logo Youtubee",
    price: 2000,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image:
      "https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png",
  };
  response.render("product", { product });
});

// //page de collection de book
// app.get("/books/:bookName", (request, response) => {
//   const collectionOfBooks = ["Goeland", "Alchimiste", "Naruto"];
//   const routeParameters = request.params;
//   const findBook = collectionOfBooks.find(
//     (book) => book === routeParameters.bookName
//   );
//   if (findBook) {
//     response.render("book-details", { bookName: routeParameters.bookName });
//   } else {
//     const imgEreur = {
//       image:
//         "https://images7.memedroid.com/images/UPLOADED136/546c8900dd5fd.jpeg",
//     };
//     response.status(404).render("not-found", { imgEreur });
//   }
// });

//
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
