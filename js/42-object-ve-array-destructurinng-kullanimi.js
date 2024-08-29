// Object Destructuring:

let settings = {
  userName: "loremIpsum",
  password: "BadPassword",
  isActive: false,
  ip: "127.0.0.1",
  serverName: "kodluyoruz.org",
};

// obje icindeki bilgilerin tek seferde cikarilmasi
// let userName = settings.userName;
// console.log(userName);

// rename && destructuring
let { userName: user, password, isActive, ip: serverIP, serverName } = settings;

console.log(user, password, isActive, serverIP, serverName);
console.log(settings);
console.log(user);

// obje icinde bazı bilglerin cikarilmasi
let {
  userName: userName2,
  password: password2,
  isActive: isActive2,
  ...newSettings
} = settings;

console.log(userName2, password2, isActive2, newSettings);

// objenin destructuring ile kopyalanmasi

// HATALI!!!!
// let settings2 = settings;
// settings.userName = "Degisen Bilgi";
// console.log("settings", settings);
// console.log("settings2", settings2);

// DOGRUSU
let settings2 = { ...settings };
settings2.userName = "Değisen Bilgi";
console.log("settings", settings);
console.log("settings2", settings2);

let score = [100, 200, 300, 400];
let [score1, score2, ...otherScore] = score;

// object kopyalama ile ayni...
let copyOfScore = [...score];
console.log(copyOfScore);

let person = { name: "Selin", city: "Ankara", favoriteColor: "aqua blue" };
let { name: foo } = person;
console.log(foo);
