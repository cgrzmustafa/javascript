// ******* karşılaştırma operatörleri ve mantıksal operatörler

let price = "100";
let user = "mustafa";

// == Eşitse
console.log("== :", price == 1);
console.log("== :", price == 100);

// === Hem değeri hem de türü eşitse
console.log("=== :", price === 1);
console.log("=== :", price === 100);

// != Eşit değilse
console.log(user != "guest");

// < Küçükse
console.log("price < 100", price < 100);

// <= Küçük veya eşitse
console.log("price <= 100", price <= 100);

// > Büyükse
console.log("price > 100", price > 100);

// >= Büyük veya eşitse
console.log("price >= 100", price >= 100);

// && ve
console.log(price > 100 && user != "guest");

// || veya
console.log(price > 100 || user != "guest");

// ! değil (tersi)
console.log(!(price > 100 && user != "guest"));
