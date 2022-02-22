import fetch from "node-fetch";
// fetch(url, options); // => Promise<Response>

function getCategories(): Promise<string[]> {
  // Your code goes here
  return new Promise((resolve, reject) => {
    const re = true;
    if (re === true) {
      resolve(fetch("https://api.chucknorris.io/jokes/categories").then((response) => response.json()));
    } else {
      reject("An error occured");
    }
  });
}

function getJoke(categorie: string): Promise<string[]> {
  // Your code goes here
  return new Promise((resolve, reject) => {
    const re = true;
    if (re === true) {
      resolve(
        fetch(`https://api.chucknorris.io/jokes/random?category=${categorie}`).then((response) =>
          response.json().then((result) => result.value),
        ),
      );
    } else {
      reject("An error occured");
    }
  });
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
