export const Dropdown = () => {
  return (
    <div className="autocomplete-dropdown" id="autocompleteDropdown">
      {/* Example autocomplete items - replace with API data */}
      <div className="autocomplete-item">
        <div className="autocomplete-poster"></div>
        <div className="autocomplete-info">
          <h4>Example Movie Title</h4>
          <p>2024 • Action, Adventure</p>
        </div>
      </div>
      {/* Add more autocomplete items here from API response */}
    </div>
  );
};
