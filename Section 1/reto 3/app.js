const initialBudget = prompt("Cuál es tu presupuesto?: ");
console.log( `Tu presupuesto es de: `, initialBudget);

const accommodation = prompt ("Cuanto cuesta tu alojamiento?: ")
const transport = prompt ("Cuanto cuesta tu transporte?: ")
const food = prompt ("cuanto cuesta tu comida?: ")

let BasicExpenses = accommodation + transport + food
console.log(`El total de tus gastos basicos son: `, BasicExpenses);

let RestMoney = initialBudget - BasicExpenses
console.log(`Tienes ${RestMoney} Para gastar`)


