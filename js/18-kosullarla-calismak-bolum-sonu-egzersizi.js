// Koşullarla Çalışmak Bölüm Sonu Egzersizi

/*
1- prompt ile aldığın bilgiye göre aşağıdaki yapıyı kullanarak notun bilgisini infoya yazdır
AA : 90-100
BA : 85-90
BB : 80-84
CB : 75-79
CC : 70-74
DC : 65-69
DD : 60-64
FD : 50-59
FF : 0-49

2- Kullanıcının girdiği verinin istediğimiz aralıkta olup olmadığını kontrol et
3- FF bilgisinde üzgün surat ikonu çıkart, diğerlerinde ise gülücük olsun
4- FF class bilgisi text-danger, diğerlerinin ise text-primary olsun
*/
const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
`;

const FROWN = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
`;

let examGrade = prompt("Puanı Girin:");
let textInfo;
let info = document.querySelector("#info");

if (examGrade >= 0 && examGrade <= 100) {
  textInfo = SMILE;
  info.classList.add("text-primary");
  if (examGrade >= 90) {
    textInfo += " AA";
  } else if (examGrade >= 85) {
    textInfo += " BA";
  } else if (examGrade >= 80) {
    textInfo += " BB";
  } else if (examGrade >= 75) {
    textInfo += " CB";
  } else if (examGrade >= 70) {
    textInfo += " CC";
  } else if (examGrade >= 65) {
    textInfo += " DC";
  } else if (examGrade >= 60) {
    textInfo += " DD";
  } else if (examGrade >= 50) {
    textInfo += " FD";
  } else if (examGrade < 50) {
    textInfo = `${FROWN} FF`;
    info.classList.remove("text-primary");
    info.classList.add("text-danger");
  }
} else {
  textInfo = "Bilgiler Doğru Değil";
}

info.innerHTML = `${textInfo} -> ${examGrade}`;
