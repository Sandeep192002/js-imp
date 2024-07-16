// Object to store movie information
const favoriteMovie = {
    title: "Your Favorite Movie Title", // Replace with your favorite movie title
    duration: 120, // Duration in minutes (adjust as needed)
    stars: ["Actor 1", "Actor 2", "Actor 3"] // Replace with your movie's stars
  };
  
  // Function to print movie information
  function printMovieInfo(movie) {
    const { title, duration, stars } = movie; // Destructuring for cleaner access
    console.log('${title} lasts for ${duration} minutes. Stars: ${stars.join(', ')}');
  }
  
  // Print movie information using the function
  printMovieInfo(favoriteMovie);