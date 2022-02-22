function waitFor(time: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const re = true;
    setTimeout(() => {
      if (re === true) {
        resolve();
      } else {
        reject("An error occured");
      }
    }, time);
  });
}

waitFor(2000)
  .then(() => {
    console.log("c passé ");
  })
  .catch(() => {
    console.error("c pas passé");
  });

export { waitFor };
