function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log('${celsius}°C is ${fahrenheit.toFixed(2)}°F'); // Round to 2 decimal places
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    console.log('${fahrenheit}°F is ${celsius.toFixed(2)}°C'); // Round to 2 decimal places
  }
  
  // Example usage
  celsiusToFahrenheit(25); // 25°C is 77.00°F
  fahrenheitToCelsius(77); // 77°F is 25.00°C