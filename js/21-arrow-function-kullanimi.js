// *** arrow function kullanımı

function hello(firstname) {
  console.log(`Merhaba ${firstname}`);
}

hello("Javascript");

const helloFuncV1 = (firstname) => {
  console.log(`Merhaba ${firstname}`);
};
helloFuncV1("helloFuncV1");

const helloFuncV2 = (firstname) => console.log(`Merhaba ${firstname}`);
helloFuncV2("helloFuncV2");

const helloFuncV3 = (firstname, lastName) =>
  console.log(`Merhaba ${firstname} ${lastName}`);
helloFuncV3("helloFuncV3", "Last Name Info");

const helloFuncV4 = (firstname, lastName) => {
  let info = `Merhaba ${firstname} ${lastName}`;
  console.log(info);
  return info;
};
helloFuncV4("helloFuncV4", "Other Info");
