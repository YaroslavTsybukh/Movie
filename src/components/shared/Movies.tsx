import { ProgressBar, Skeleton, Loading, EmptyState } from '../ui';
import { MovieCard } from './MovieCard';

export const Movies = () => {
  return (
    <section className="results-section">
      {/* Progress Bar - Show during API requests */}
      <ProgressBar />

      <div className="results-header">
        <h2 className="results-title">Search Results</h2>
        <span className="results-count" id="resultsCount">
          0 movies found
        </span>
      </div>

      {/* Movies Grid - Populate with TMDB API data  */}
      <div className="movies-grid" id="moviesGrid">
        {/* Example Movie Cards - Replace with real data from TMDB API  */}
        <MovieCard />

        {/* Add more movie cards here programmatically  */}
      </div>

      {/* Skeleton Loading - Show while loading */}
      <Skeleton />

      {/* Loading State - Show while API request is in progress  */}
      <Loading />

      {/* Empty State - Show when no results found  */}
      <EmptyState />
    </section>
  );
};
