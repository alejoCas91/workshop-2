
const souvenirs = [];

const name = prompt("Please enter the name of the souvenir (or STOP to finish):");
if (name === "STOP") {
    console.log("No souvenirs were added.");
} else {
    const cost = +prompt("Please enter the cost of the souvenir:");
    if (cost < 0) {
        console.error("Souvenir cost should be a positive number");
    } else {
        const available = confirm("Is the souvenir available?");
        souvenirs.unshift({
            name,
            cost,
            available
        });
    }
    console.log("List of souvenirs:");
    souvenirs.forEach((souvenir, index) => {
        console.log(${index + 1}. ${souvenir.name} - $${souvenir.cost} - ${souvenir.available ? "Available" : "Not available"});
    });
}