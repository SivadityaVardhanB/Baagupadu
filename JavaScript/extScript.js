let js = "Jarvis";
/* console.log(10 + 30 + 15 + 5 + 40);
console.log("JONAS");
console.log(js); */

let firstName = "Tinku";
let lastName = "Stark";

const currentYear = 2023;
const ageTinku = currentYear - 1998;
const ageStark = currentYear - 2000;

console.log(firstName + " " + lastName);
console.log(ageTinku, ageStark);

const newName = `I'm ${firstName + " " + lastName}! `;
console.log(newName);

if (ageTinku >= 18) {
  console.log("I have a driver's license 🚗");
} else {
    const yearsRequired = 18 - ageTinku
  console.log(`wait for ${yearsRequired} to get driver's license`);
}
