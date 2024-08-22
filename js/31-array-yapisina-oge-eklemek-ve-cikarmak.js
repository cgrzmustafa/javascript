let items = [10, 20, 30, 40];
console.log("items - ilk hali : ", items);

// Array: sona oge/eleman eklemek -> push
items.push(50);
console.log("50 : ", items);

// Array: basa oge/eleman eklemek -> unshift
items.unshift(5);
console.log("5 : ", items);

// Array: sondaki ogeyi cikarmak -> pop
let lastItem = items.pop(); // son elemani lastItem icerisine ekledik
console.log("lastItem: ", lastItem, "items: ", items);

// Array: bastaki ogeyi cikarmak -> shift
let firstItem = items.shift(); // ilk elemani firstItem icerisine ekledik
console.log("firstItem: ", firstItem, "items: ", items);

// Array icindeki bir ogenin bilgisinin degistirilmesi:

// ilk ogenin degistirilmesi
items[0] = 5;
console.log(items);

// son ogenin degistirilmesi
items[items.length - 1] = 2000;
console.log(items);

// boş kısımlar olusur
items[10000] = 10000;
console.log(items);
