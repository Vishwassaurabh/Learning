// http://www.omdbapi.com/?apikey=tt3896198&apikey=b4157cab&s=mummy

document.addEventListener("DOMContentLoaded", () => {
  const movieForm = document.getElementById("movieForm");
  const moviesresults = document.getElementById("movieResults");
  movieForm.addEventListener("submit", (e) => {
    const movieName = document.getElementById("movieInput").value;
    // prevent the browser default
    e.preventDefault();
    fetchmovies(movieName);
  });

  //search for movies
  async function fetchmovies(movieName) {
    try {
      //loading
      moviesresults.innerHTML =
        '<div class="loading">Searching movies....</div>';
        
      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=b4157cab&s=${movieName}`,
      );
      const data = await response.json();

      if (data.Response === "false") {
        throw new Error("No Movies Found");
      }

    displayMovies(data.Search);

    } catch (error) {
      moviesresults.innerHTML = `<div class="error-message">"Error searching movies. please try again.</div>`;
    }
  }

  //display all this movies
  function displayMovies(movies) {
    moviesresults.innerHTML = `
      <div class="movies-grid">
      ${movies
        .map(
          (movie) => `
      <div class="movie-card">
      <img src="${movie.Poster}" 
      alt="${movie.Title}"
      class="movie-poster"
      />
      <div class='movie-info'>
      <h3 class="movie-title">${movie.Title}</h3>
      <div class="movie-year">${movie.Year}</div>
      </div>
      </div>`,
        )
        .join("")}
      </div>`;
  }
});
