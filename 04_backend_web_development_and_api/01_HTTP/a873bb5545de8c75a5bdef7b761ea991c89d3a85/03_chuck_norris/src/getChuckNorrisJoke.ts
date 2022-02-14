import request from "@fewlines-education/request";

function getChuckNorrisJoke(response: string) {
  // code the function here
  request(`https://api.chucknorris.io/jokes/random?category=${response}`, (error, body) => {
    if (error) {
      console.error(error);
    } else {
      // console.log(body);
      const json = JSON.parse(body);
      console.log(json);
    }
  });
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
