const souvenirs = [];
let flag = false;

const validate = (type, value) => typeof value === type && !Number.isNaN(value);

if (confirm("Quieres llevar un recuerdo?")) {
  let name = prompt("Ingresa el nombre del recuerdo");
  let cost = prompt("ingresa el costo del recuerdo");
  cost = Number(cost);
  let available = confirm("Esta disponible?");
  flag =
    validate("string", name) &&
    validate("number", cost) &&
    validate("boolean", available);
  if (flag === true) {
    const souvenir = {
      name: name,
      cost: cost,
      available: available,
    };
    souvenirs.unshift(souvenir);
    console.log(souvenirs);
  }
}

if (confirm("Desea ingresar un recuerdo")) {
  let name = prompt("Ingresa el nombre del recuerdo");
  let cost = prompt("ingresa el costo del recuerdo");
  cost = Number(cost);
  let available = confirm("Esta disponible?");
  flag =
    validate("string", name) &&
    validate("number", cost) &&
    validate("boolean", available);
  if (flag === true) {
    const souvenir = {
      name: name,
      cost: cost,
      available: available,
    };
    souvenirs.unshift(souvenir);
    console.log(souvenirs);
  }
}

if (confirm("Desea ingresar un recuerdo")) {
  let name = prompt("Ingresa el nombre del recuerdo");
  let cost = prompt("ingresa el costo del recuerdo");
  cost = Number(cost);
  let available = confirm("Esta disponible?");
  flag =
    validate("string", name) &&
    validate("number", cost) &&
    validate("boolean", available);
  if (flag === true) {
    const souvenir = {
      name: name,
      cost: cost,
      available: available,
    };
    souvenirs.unshift(souvenir);
    console.log(souvenirs);
  }
}

if (confirm("Desea ingresar un souvenir")) {
  let name = prompt("Ingresa el nombre del recuerdo");
  let cost = prompt("ingresa el costo del recuerdo");
  cost = Number(cost);
  let available = confirm("Esta disponible?");
  flag =
    validate("string", name) &&
    validate("number", cost) &&
    validate("boolean", available);
  if (flag === true) {
    const souvenir = {
      name: name,
      cost: cost,
      available: available,
    };
    souvenirs.unshift(souvenir);
    console.log(souvenirs);
  }
}
