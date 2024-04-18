const energy = confirm("Te sientes bien hoy?");
console.log(energy);
const climate = confirm("Ves un buen clima?");
console.log(climate);
const work = confirm("Tienes mucho trabajo?");
console.log(work);

if (energy && climate && work) {
  alert("Puedes ir a hacer ejercicio!!");
}
else{
    alert("Presionaste cancelar 1 vez")
}


