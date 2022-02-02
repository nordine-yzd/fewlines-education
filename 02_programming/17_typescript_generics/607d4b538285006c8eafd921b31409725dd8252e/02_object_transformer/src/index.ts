type Product = {
  productName: string;
  quantity: number;
};
function productTransformer(product: Product): [string, string | number][] {
  const newProduct = Object.entries(product);
  // for (const [key, value] of Object.entries(product)) {
  //   newProduct.push([key, value]);
  // }
  return newProduct;
}

// Leave the line below for tests to work properly.
export { productTransformer };

// const result = productTransformer({
//   productName: "plop",
//   quantity: 2,
// });

// console.log(result);
