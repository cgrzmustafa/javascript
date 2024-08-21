let firstName = prompt("Kullanıcı adı giriniz");

let now = new Date();

let number1 = document.querySelector("#number1");

let number2 = document.querySelector("#number2");

let number3 = document.querySelector("#number3");

number1.innerHTML = `Merhaba, ${firstName} Hoş geldin!`;

number2.innerHTML = `${now}`;

number3.innerHTML = `tarihinde <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın Javascript bölümü 1. ödevindesiniz.`;
