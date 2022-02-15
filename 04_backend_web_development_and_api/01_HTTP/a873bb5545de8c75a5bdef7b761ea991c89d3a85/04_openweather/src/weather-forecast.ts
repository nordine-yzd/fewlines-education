import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByZipcode(zipcode: string, countryCode: string) {
  // code the function here
  request(
    `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&units=metric&lang=fr&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, body) => {
      if (error) {
        console.error(error);
      } else {
        // console.log({ body });
        const json = JSON.parse(body);
        // const json = JSON.parse(body);
        json.list.forEach((element: any) => {
          const dateBrut = element.dt_txt;
          const dateSplit = dateBrut.split(" ");
          console.log("{");
          console.log(` date: ${dateSplit[0]}`);
          console.log(` heure: ${dateSplit[1]}`);
          console.log(` temperature: ${Math.round(element.main.temp * 10) / 10} °C`);
          console.log(` météo: ${element.weather[0].description}`);
          console.log("}");
          // arrayResult.push(element.main.temp);
        });
        // console.log(Math.round(json) + "°C");
        // console.log("main---------- " + json.list[0].main);
        // console.log("weather----------- " + json.list[0].weather);
        // console.log("cloud----------- " + json.list[0].cloud);
        // console.log("wind------------ " + json.list[0].wind);
        // console.log("sys--------------- " + json.list[0].sys);
        // console.log(json.list[0].weather);
        // console.log(json.list[0].main.temp);
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
