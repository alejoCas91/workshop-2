const energy = confirm("Te sientes bien hoy?");
console.log(energy);
const climate = confirm("Ves un buen clima?");
console.log(climate);
const work = confirm("Tienes mucho trabajo?");
console.log(work);

if (energy && climate && work) {
  alert("Puedes ir a hacer ejercicio!!");
} else if (energy && work) {
  alert("quedate en casa trabajando proyectos personales");
}
  else if (climate && work) {
  alert("tomate el dia libre");
} else if (work) {
  alert("Ve a una cafeteria");
}
  else if (energy) {
  alert("tomate el dia libre");
}
