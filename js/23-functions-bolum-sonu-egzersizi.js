// bolum sonu egzersizi

let counter = 0;
let counterDOM = document.querySelector("#counter");
let incraseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

incraseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);

function clickEvent() {
  console.log(this.id);
  if (this.id == "increase") {
    counterDOM.innerHTML = counter += 1;
  } else {
    counterDOM.innerHTML = counter -= 1;
  }
}
