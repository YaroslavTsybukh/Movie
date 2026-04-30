import { Dropdown } from '../ui';
import { Filters } from './Filters';

export const Search = () => {
  return (
    <section className="search-section">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
          id="movieSearch"
        />

        {/* Autocomplete Dropdown - Connect to TMDB API for real-time suggestions */}
        <Dropdown />
      </div>

      {/* Advanced Filters Section  */}
      <Filters />
    </section>
  );
};
