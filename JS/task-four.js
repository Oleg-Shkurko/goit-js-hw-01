const orderPieces = 4;
const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice; // Write code on this line
let balanceCredit; // Write code on this line
let message;
// Write code under this line
totalPrice = orderPieces * pricePerDroid;
balanceCredit = credits - totalPrice;
if (orderPieces === null) {
  console.log((message = CANCELED_BY_USER));
} else {
  if (totalPrice > credits) {
    console.log((message = ACCESS_DENIED));
  } else {
    console.log(
      (message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`)
    );
  }
}
