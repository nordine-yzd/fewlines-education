function addition(a, b) {
  // Code here
  const result =  a + b ;
  return console.log(result);
}
addition(1, 2);
function substraction(a, b) {
  // Code here
  const result =  a - b ;
  return console.log(result);
}
substraction(10, 2);

function multiplication(a, b) {
  // Code here
  const result =  a * b ;
  return console.log(result);
}

function division(a, b) {
  // Code here
  const result =  a / b ;
  return console.log(result);
}

function chooseOperation(int1, int2,operation) {
  const getFonctions = fonctions[operation] ;
  operation(getFonctions);
}




chooseOperation(1,1,addition);



// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
