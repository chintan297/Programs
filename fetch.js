
  async function logMovies() {
    const response = await fetch("https://unsplash.com/photos/OWpsVYPWOZE");

    const movies = await response.json();
    console.log(movies);
  }
logMovies()