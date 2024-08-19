// *********** let ve const ile değişken tanımlama **********

// var ile değişken tanımlama:
//var serverName = "api.kodluyoruz.org"
//console.log(serverName)

// let ile boş değişken tanımlamak:
let serverName;
console.log(serverName);

// let ile değişkene bilgi atamak:
serverName = "https://kodluyoruz.org";
console.log(serverName);

// let ile değişkene bilgi atayarak tanımlamak:
let password = "1234";
console.log(password);

// değişken ataması yapmadan önce kullanmaya çalışmak:

/* HATALI KULLANIM
console.log(fullName)
let fUllName = "Mustafa Ciğersiz"
*/
let fUllName = "Mustafa Ciğersiz";

// let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek:
fullName = "Lorem Ipsum";

console.log(fullName);

// birleştirme veya ekleme işlemi
fUllName + "Yeni eklenen bilgi"; // acaba eklendi mi?
console.log(fullName + " Text Bilgisi"); //ekle ve göster ama değişkene eklemedik
fullName = fullName + " Yeni Bilgi";

fullName = "Sıfırlandı";
fullName += " ve yeni bilgi eklendi";
console.log(fullName);

// const ile değişkeni bos tanımlamaya calismak :(  :
// const serverPassword; // sadece değişken tanimlandı ama içi boş ??

// const ile değişken tanımlamak:

const SERVER_PASSWORD = "mcdmcmwdkcmdm";
console.log(SERVER_PASSWORD);

//SERVER_PASSWORD = "1234";
//console.log(SERVER_PASSWORD);

// const bir daha değişmez.
