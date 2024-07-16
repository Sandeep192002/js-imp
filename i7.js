const PI = Math.PI; // Use the built-in PI constant

function calcCircumference(radius) {
  const circumference = 2 * PI * radius;
  console.log('The circumference is ${circumference.toFixed(2)}'); // Round to 2 decimal places
}

function calcArea(radius) {
  const area = PI * radius * radius;
  console.log('The area is ${area.toFixed(2)}); // Round to 2 decimal places')
}

// Example usage
calcCircumference(5); // The circumference is 31.42
calcArea(5);         // The area is 78.54