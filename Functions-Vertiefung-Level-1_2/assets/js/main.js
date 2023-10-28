// say Hallo
const sayHallo = document.querySelector("#sayHallo");
const hallo = () => {
  return "Hallo";
};
sayHallo.textContent = hallo();

// Summe von zwei Zahlen
const summe = document.querySelector("#summe");

const summeFunction = (x, y) => {
  return x + y;
};
summe.textContent = summeFunction(2, 3);

//  Multi von zwei Zahlen
const multi = document.querySelector("#multi");

const multiFunction = (x, y) => {
  return window.alert(x * y);
};
multiFunction(2, 3);

// Typ checken
const typeCheck = document.querySelector("#typeCheck");

const type = (x) => {
  return typeof x;
};
let i = true;
let j = "hi";
let k = 1;
let l = { name: "John" };
let a = [0, 1];

typeCheck.textContent =
  type(i) + ", " + type(j) + ", " + type(k) + ", " + type(l) + ", " + type(a);

console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(a);
