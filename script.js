let count = 0;
let counter = document.querySelector(".counter");
const addCont = document.getElementById("addCountBtn");
const lowerCont = document.getElementById("lowerCountBtn");

addCont.addEventListener("click", increaseCounter);
lowerCont.addEventListener("click", decreaseCounter);

function increaseCounter() {
  count++;
  counter.innerHTML = count;
}

function decreaseCounter() {
  count--;
  counter.innerHTML = count;
}