// LocalStorage işlemleri:

let user = { userName: "mustafacigersiz", isActive: true };

localStorage.setItem("userInfo", JSON.stringify(user));

let userInfo = localStorage.getItem("userInfo"); // BİLGİYİ AL
userInfo = JSON.parse(userInfo);
console.log(userInfo);

// eğer yukarıdaki gibi kompleks bir yapı varsa elimizde JSON ile önce stringe dönüştür sonra parse et
