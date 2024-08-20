// ******* Liste içerisindeki son elemana ulaşmak veya eleman eklemek ******

let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML = "son öğe değiştirildi...";

let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "ilk öğe değiştirildi...";

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");

liDOM.innerHTML = "Kendi Olusturdugumuz Oge";

// ulDOM.append(liDOM); // en sona ekler

ulDOM.prepend(liDOM);
