const initialBudget = prompt("Cuál es tu presupuesto inicial?: ");
console.log(`Tu presupuesto inicial es de: ${initialBudget}`);

const accommodation = parseFloat(prompt("Cuánto cuesta tu alojamiento?: "));
const transport = parseFloat(prompt("Cuánto cuesta tu transporte?: "));
const food = parseFloat(prompt("Cuánto cuesta tu comida?: "));

const basicExpenses = accommodation + transport + food;
console.log(`El total de tus gastos básicos son: ${basicExpenses}`);

const restMoney = initialBudget - basicExpenses;
console.log(`Tienes ${restMoney} para gastos adicionales`);

const extraItemCost = parseFloat(
  prompt("Cuánto cuesta el artículo extra que deseas comprar?: ")
);
const safetyNet = parseFloat(
  prompt("Cuánto dinero deseas reservar para gastos imprevistos?: ")
);

if (restMoney >= extraItemCost + safetyNet) {
  console.log(
    `Puedes considerar comprar el artículo extra y aún así tener suficiente dinero para gastos imprevistos.`
  );
} else {
  console.log(
    "Intenta evitar gastos adicionales para no sobrepasar tu presupuesto."
  );
}
