export const recipeMaker = {
  //code here
  coffeeRecipes: [
    {
      name: "espresso",
      ingredients: ["espresso"],
    },
    {
      name: "macchiato",
      ingredients: ["espresso", "milk foam"],
    },
    {
      name: "latte",
      ingredients: ["espresso", "milk foam", "steamed milk"],
    },
    {
      name: "cappuccino",
      ingredients: ["espresso", "milk foam", "steamed milk", "chocolate"],
    },
    {
      name: "americano",
      ingredients: ["espresso", "water"],
    },
  ],
  giveRecipe: function giveRecipe(dataReceved: string): string {
    let result: string = "empty";

    for (let i = 0; i < recipeMaker.coffeeRecipes.length; i++) {
      // console.log(i);
      // console.log(recipeMaker[i].name);
      if (recipeMaker.coffeeRecipes[i].name === dataReceved) {
        result = `${recipeMaker.coffeeRecipes[i].name} ingredients:\n- ${recipeMaker.coffeeRecipes[i].ingredients.join(
          ",\n- ",
        )}`;
      }
    }
    if (result === "empty") {
      result = `Sorry, ${dataReceved} does not exist on our list.`;
    }
    return result;
  },
};

// console.log(recipeMaker.coffeeRecipes);
// recipeMaker.giveRecipe();

// const re = giveRecipe("espresso");
// console.log(re);
