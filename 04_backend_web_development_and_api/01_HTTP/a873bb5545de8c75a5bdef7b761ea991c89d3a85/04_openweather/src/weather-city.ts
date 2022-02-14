import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByCity(city: string): void {
  // code the function here
  // e00116f2bbce155d56ea3d3f20680b2c;
  request(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, body) => {
      if (error) {
        console.error(error);
      } else {
        // const json = JSON.parse(body);
        console.log(body);
      }
    },
  );
}

console.log("Weather for Lille:");
weatherByCity("Lille");

// leave lines below for tests to work properly
export { weatherByCity };
