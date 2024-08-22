// LocalStorage kullanımı

let user = "kullanici";

localStorage.setItem("userName", user);

let userInfo = localStorage.getItem("userName");

console.log(userInfo);
