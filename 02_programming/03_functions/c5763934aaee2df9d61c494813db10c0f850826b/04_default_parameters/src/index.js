function helloSpartan(name = "soldier") {
  // Code the function here.
  if (name === "soldier") {
    console.log("Hello soldier; not very talkative uh?");
  }else {
    console.log(`Hello ${name}: glad to know your name!`);
  }
}

helloSpartan();
helloSpartan("anthony");


// Do not remove last lines, it is for tests
module.exports = helloSpartan;





/*

function helloSpartan(name = "Hello soldier; not very talkative uh?" ) {
  // Code the function here.
  console.log(`${name}`);

}


// Do not remove last lines, it is for tests
module.exports = helloSpartan;


helloSpartan();
helloSpartan("jul");
*/
