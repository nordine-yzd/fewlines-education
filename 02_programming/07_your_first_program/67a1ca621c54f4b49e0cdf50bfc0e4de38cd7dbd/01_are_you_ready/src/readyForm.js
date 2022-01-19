const readyForm = (reader) => {
  console.log("Hello user");
  //creation d'une fonction qui qui va log une question puis recuperer la reponse
  reader.question("Are you ready for today ??!\n", (answer) => {
    console.log(`WOW, ${answer} ??!! Really Nice! Let's goo !!.`);
    reader.close();
  });
};

// Leave line below for tests to work
module.exports = readyForm;
