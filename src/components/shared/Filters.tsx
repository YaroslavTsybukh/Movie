import { FilterField } from '../ui';

export const Filters = () => {
  return (
    <div className="advanced-filters">
      <button className="filters-toggle" id="filtersToggle">
        🔽 Advanced Search Options
      </button>

      <div className="filters-content" id="filtersContent">
        <FilterField label="Language">
          <select className="filter-select" id="languageFilter">
            <option value="en-US">English (US)</option>
            <option value="en-GB">English (UK)</option>
            <option value="es-ES">Spanish</option>
            <option value="fr-FR">French</option>
            <option value="de-DE">German</option>
            <option value="it-IT">Italian</option>
            <option value="ja-JP">Japanese</option>
            <option value="ko-KR">Korean</option>
            <option value="zh-CN">Chinese</option>
            //TODO: Populate with all TMDB supported languages
          </select>
        </FilterField>

        <FilterField label="Release Year">
          <input
            type="number"
            className="filter-input"
            placeholder="e.g. 2024"
            id="primaryReleaseYear"
            min="1900"
            max="2030"
          />
        </FilterField>

        <FilterField label="Year">
          <input
            type="number"
            className="filter-input"
            placeholder="e.g. 2024"
            id="yearFilter"
            min="1900"
            max="2030"
          />
        </FilterField>

        <FilterField label="Region">
          <select className="filter-select" id="regionFilter">
            <option value="">All Regions</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="ES">Spain</option>
            <option value="IT">Italy</option>
            <option value="JP">Japan</option>
            <option value="KR">South Korea</option>
            //TODO: Populate with all ISO country codes
          </select>
        </FilterField>

        <FilterField label="Page">
          <input
            type="number"
            className="filter-input"
            placeholder="1"
            id="pageFilter"
            min="1"
            max="1000"
            value="1"
          />
        </FilterField>

        <FilterField label="Content Filter">
          <div className="checkbox-field">
            <input type="checkbox" id="includeAdult" />
            <label htmlFor="includeAdult">Include Adult Content</label>
          </div>
        </FilterField>
      </div>
    </div>
  );
};
