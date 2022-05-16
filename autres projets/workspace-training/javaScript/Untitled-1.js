//creation de la fonction qui se trouvera dans une autre fonction
const fonction1 = () => {
  console.log("je suis la fonction 1");
};

// creation de la fonction callback
function fonction2 (callback) {
  console.log("je suis la fonction 2");
  callback();
  }

  fonction2(fonction1);
