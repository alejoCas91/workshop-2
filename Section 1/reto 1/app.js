const destination = prompt("Where you go?: ");
const dailyBudget = prompt("How much will you spend per day (Approximately)?: ");
let Instance, initialBudget, travelBudget;

Instance = prompt("how many days will you stay?: ");
console.log(`You stay for:`, Instance);
initialBudget = prompt("Your budget: ");
console.log( `Tu presupuesto es de: `, initialBudget);

travelBudget = initialBudget / Instance;

if (travelBudget >= dailyBudget) {
  alert("Julian can travel");
} else {
  alert("insufficient funds ●︿● save more money");
}
