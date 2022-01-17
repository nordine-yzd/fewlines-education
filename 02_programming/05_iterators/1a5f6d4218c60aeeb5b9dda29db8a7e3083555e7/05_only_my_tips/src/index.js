function onlyMyTips(invoices) {
  // Code here
  const semi = invoices.filter(article => article.waiter === "Yourself" && article.tip);
  return semi.map(art => art.tip);
}

const todaysInvoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

// const re = onlyMyTips(todaysInvoices);
// console.log(re);

// Do not remove the following line, it is for tests
module.exports = onlyMyTips;
