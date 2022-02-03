type CoffeeRecipe = {
  name: string;
  ingredients: string[];
};

const coffeeRecipes: CoffeeRecipe[] = [
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
];

export function giveRecipe(dataReceved: string): string {
  let result: string = "empty";

  for (let i = 0; i < coffeeRecipes.length; i++) {
    // console.log(i);
    // console.log(coffeeRecipes[i].name);
    if (coffeeRecipes[i].name === dataReceved) {
      result = `${coffeeRecipes[i].name} ingredients:\n- ${coffeeRecipes[i].ingredients.join(",\n- ")}`;
    }
  }
  if (result === "empty") {
    result = `Sorry, ${dataReceved} does not exist on our list.`;
  }
  return result;
}

// const re = giveRecipe("espresso");
// console.log(re);
