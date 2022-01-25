import moment from "moment";

function formatDate(string) {
  const date = moment(string).format("dddd Do MMMM gggg");
  return date;
}
// console.log(formatDate("2000-05-31")); // Wednesday 31st May 2000

function yearsSinceDate(string) {
  let date = moment(string).fromNow();
  let gg = "";
  for (let index = 0; index < 2; index++) {
    gg += date[index];
  }
  return gg;
}
console.log(yearsSinceDate("2000-05-31")); // 20

function getDayFromDate(params) {}
function daysSinceDate(params) {}

export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };
