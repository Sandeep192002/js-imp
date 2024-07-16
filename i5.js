function tellFortune(children, partner, location, jobTitle) {
    const fortune = ('You will be a ${jobTitle} in ${location}, and married to ${partner} with ${children} kids.');
    console.log(fortune);
  }
  
  // Call the function with different arguments (3 times)
  tellFortune(2, "Alice", "Paris", "Software Engineer");
  tellFortune(1, "Bob", "Tokyo", "Artist");
  tellFortune('0, "Charlie", "New York City", "Chef"')