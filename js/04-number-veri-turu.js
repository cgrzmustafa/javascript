// **********number***********
// number veri türü tanımlamak:
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
  "Fiyat:",
  price,
  "KDV Oranı:",
  tax,
  "KDV Tutarı",
  priceTax,
  "Fiyat:",
  total
);

let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log(newNumber);
console.log("Number Constractor içine bilgi gönderildi:", Number("111"));

// arttırma ve azaltma işlemleri:
let counter = 320;
counter = counter + 1; //uzun yöntem
counter += 1;
counter++;
console.log(counter);

counter--;
counter -= 1;
console.log(counter);

counter *= 10;
console.log(counter);

counter /= 2;
console.log(counter);

// işlem önceliği:
console.log(2 + 3 * 10); // 50 ???????
console.log((2 + 3) * 10); // 50 ???????

// mod(kalan) alma %:
// sayı tek mi çift mi ???
console.log(17 % 2); // 0 ise çift -, 1 ise tek

// 8 ürün alan koliye tüm ürünler sığıyor mu ?
console.log("Koli Kalan Ürün Örneği: ", 18 % 8);

// üs alma **:
console.log(2 * 2 * 2 * 2);
console.log(2 ** 4);

// aşağı yuvarlama işlemi -> Math.floor
console.log("Aşağı yuvarlama:", Math.floor(1.7));

// yukarı yuvarlama işlemi -> Math.ceil
console.log("Yukarı yuvarlama:", Math.ceil(1.7));

// yakına yuvarlama işlemi -> Math.round
console.log("Yakına yuvarlama:", Math.round(1.7));
