// Object icinde nasıl metot ekleriz?

let user1 = {
  firstName: "Mustafa",
  lastName: "Ciğersiz",
  score: [1, 2, 3, 4],
  isActive: true,
  shortName: function () {
    return `${this.firstName[0].toUpperCase}. ${this.lastName}`;
  },
};
