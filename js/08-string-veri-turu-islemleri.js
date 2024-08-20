// ******** String veri türü işlemleri *****

let email = "cigersizmustafa5@gmail.com";
let firstName = "Mustafa";
let lastName = "CİĞERSİZ";

// string karakter sayısı -> length
console.log(email.length);

// ilk karakteri bulmak -> [0]
console.log(firstName[0]);
console.log(firstName.charAt(0));

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// string içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(email.search("@"));
console.log(email[16]);

email.search("olmayan"); // -1

// belli bir yere kadar al -> slice : (domain bilgisi)

let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(DOMAIN.slice(0, DOMAIN.indexOf("."))); // sadece gmail kısmını aldık

// bilgiyi değiştir -> replace :
email = email.replace("gmail.com", "kodluyoruz.org");
console.log(email);

// istediğim bilgi var mı ? -> includes :
email.includes("jdnacsnajd"); // false
email.includes("@"); // true

// istediğim bilgiyle başladı mı ? bitti mi -> startWidth, endsWidth :
console.log(email.endsWith("kodluyoruz.org"));

// ilk harflerini büyük yapmak
let fullName = `${firstName[0].toUpperCase()}${firstName
  .slice(1)
  .toLowerCase()} ${lastName[0].toUpperCase()}${lastName
  .slice(1)
  .toLowerCase()}`;

console.log(fullName);
