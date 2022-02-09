export function capitalize(word: string): string {
  // Code your function here
  const capitalizeString = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalizeString;
}

// capitalize("frieda") // returns "Frieda"
