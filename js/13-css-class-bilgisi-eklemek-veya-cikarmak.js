// ***** css class bilgisi eklemek veya çıkarmak *****

let greeting = document.querySelector("#greeting");

greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info", "second-class", "third-class"); // birden fazla eleman eklemek

greeting.classList.remove("title", "second-class", "third-class"); // birden fazla eleman silmek

console.log(greeting.classList);
