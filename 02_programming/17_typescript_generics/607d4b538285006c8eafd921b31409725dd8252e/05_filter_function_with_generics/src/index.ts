function filterFor<T, K>(array: T[], predicate: (element: T) => K): T[] {
  const resultArray = [];

  for (const element of array) {
    if (predicate(element)) {
      resultArray.push(element);
    }
  }

  return resultArray;
}

export { filterFor };
