// ****** Ternany operatör ile short if kullanımı ******

// eğer kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunamadı yazdır

let userName = prompt("Kullanıcı bilginizi yazınız");
let info = document.querySelector("#info");

// ternany kullanımı:
// kosul ? dogruysa : yanlıssa
// userName.length > 0 ? userName : "Kullanıcı bilginiz bulunamadı :("

info.innerHTML = `${
  userName.length > 0 ? userName : "Kullanıcı bilginiz bulunamadı :("
}`;
