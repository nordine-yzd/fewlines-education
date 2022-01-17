function howMuchDidIMake(invoices) {
  const semi = invoices.filter(article => article.waiter === "Yourself" && article.tip);
  const complet = semi.map(art => art.tip);
  return complet.reduce((a,b) => a + b, 0);
}

const invoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

howMuchDidIMake(invoices);

// Do not remove the following line, it is for tests
module.exports = howMuchDidIMake;
