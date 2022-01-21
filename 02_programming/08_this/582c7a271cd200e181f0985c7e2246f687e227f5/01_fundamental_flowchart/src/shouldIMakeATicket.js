function shouldIMakeATicket(isStuck, timeBeingStuck, hourOfTheDay) {
  if (isStuck == true && timeBeingStuck >= 20) {
    if (hourOfTheDay >= 9 && hourOfTheDay < 18 && hourOfTheDay !== 13) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// function timeBeingStuckisTrue(timeBeingStuck) {
//   if (timeBeingStuck >= 20) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function hourOfTheDayisTrue(hourOfTheDay) {
//   if (hourOfTheDay >= 9 && hourOfTheDay < 18 && hourOfTheDay !== 13) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Don't touch this for tests to execute properly
module.exports = shouldIMakeATicket;
