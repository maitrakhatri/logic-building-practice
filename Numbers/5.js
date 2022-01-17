// Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

const a = prompt("Enter side length: ");

const area = a*a;
const perimeter = 4*a;
const SA = 6*area;
const volume = a*a*a;

console.log(`Area = ${area}
Perimeter = ${perimeter}
Surface Area = ${SA}
Volume = ${volume}`)