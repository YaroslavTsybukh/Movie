export const MovieCard = () => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        {/*  Replace with: <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />  */}
        <div className="movie-rating">8.5</div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">Example Movie Title</h3>
        <div className="movie-year">2024</div>
        <p className="movie-overview">
          This is an example movie overview that would come from the TMDB API. Replace this with
          actual movie.overview from the API response.
        </p>
        <div className="movie-genres">
          {/* Map through movie.genre_ids and show genre names */}
          <span className="genre-tag">Action</span>
          <span className="genre-tag">Adventure</span>
          <span className="genre-tag">Sci-Fi</span>
        </div>
      </div>
    </div>
  );
};
