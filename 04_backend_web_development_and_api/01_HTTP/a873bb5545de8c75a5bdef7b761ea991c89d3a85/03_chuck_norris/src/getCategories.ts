import request from "@fewlines-education/request";

function getCategories() {
  // code the function here
  request("https://api.chucknorris.io/jokes/categories", (error, html) => {
    if (error) {
      console.error(error);
    } else {
      const json = JSON.parse(html);
      console.log(json);
    }
  });
}

getCategories();
// leave line below for tests to work properly
export { getCategories };
