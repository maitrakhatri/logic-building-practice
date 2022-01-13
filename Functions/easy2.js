// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

const len = 10;

const areaOfHexagon = len => ((3*Math.sqrt(3)*len*len)/2).toFixed(2)

console.log(areaOfHexagon(len))