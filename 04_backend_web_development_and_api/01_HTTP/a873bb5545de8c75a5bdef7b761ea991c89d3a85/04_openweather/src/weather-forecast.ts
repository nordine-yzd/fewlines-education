import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByZipcode(zipcode: string, countryCode: string) {
  // code the function here
  request(
    `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`,
    (error, body) => {
      if (error) {
        console.error(error);
      } else {
        // console.log({ body });

        const json = JSON.parse(body);
        // console.log(Math.round(json) + "°C");
        console.log(json);
      }
    },
  );
}
weatherByZipcode("59000", "fr");

// function weatherByLatitudeAndLongitude(latitude, longitude) {
//   // code the function here
// }

// leave lines below for tests to work properly
export { weatherByZipcode };
