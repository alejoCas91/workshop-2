
const dailyBudget = parseFloat(prompt("Introduce tu presupuesto diario:"));
const costEatingOut = parseFloat(
  prompt("Introduce el costo de salir a comer:")
);
const costNewBook = parseFloat(prompt("Introduce el costo de un libro nuevo:"));
const desiredDailySavings = parseFloat(
  prompt("Introduce tu objetivo de ahorro diario:")
);

function canAfford(expense, currentSavings) {
  return dailyBudget - expense > -currentSavings;
}

function canAffordBoth(expense1, expense2, currentSavings) {
  const totalExpense = expense1 + expense2;
  return dailyBudget - totalExpense > -currentSavings;
}

let canEatOut = canAfford(costEatingOut, 0);
let canBuyBook = canAfford(costNewBook, 0);

let canAffordBothExpenses = canAffordBoth(costEatingOut, costNewBook, 0);

let currentSavings = dailyBudget * (21 - 7); 
let willMeetSavingsGoal = canAfford(desiredDailySavings, currentSavings);

console.log("Puedes salir a comer:", canEatOut);
console.log("Puedes comprar un libro nuevo:", canBuyBook);

if (canAffordBothExpenses) {
  console.log("¡Puedes salir a comer y comprar un libro nuevo!");
} else {
  console.log(
    "No puedes salir a comer y comprar un libro nuevo en el mismo día."
  );
}

console.log("Podrás alcanzar tu objetivo de ahorro:", willMeetSavingsGoal);
