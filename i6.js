function calculateAge(birthYear, currentYear = new Date().getFullYear()) {
    const potentialAge1 = currentYear - birthYear;
    const potentialAge2 = potentialAge1 - 1; // Account for potential birthday not yet passed
  
    console.log('You are either ${potentialAge1} or ${potentialAge2}');
  }
  
  // Call the function three times with different values
  calculateAge(1980, 2024); // Test specific years
  calculateAge(2000); // Use current year for birthYear
  calculateAge(1950); // Use current year for birthYear