import React from 'react';

function GenreFilter({
  genres,
  selectedGenre,
  onGenreChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="filter-sort-row">
      <div className="select-wrapper">
        <label htmlFor="genre-select" className="filter-label">Thể loại: </label>
        <select
          id="genre-select"
          className="filter-select"
          value={selectedGenre}
          onChange={(e) => onGenreChange(e.target.value)}
        >
          <option value="All Genres">Tất cả thể loại</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="select-wrapper">
        <label htmlFor="sort-select" className="filter-label">Sắp xếp </label>
        <select
          id="sort-select"
          className="filter-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="default">Mặc định</option>
          <option value="rating-desc">Rating: High → Low</option>
          <option value="rating-asc">Rating: Low → High</option>
        </select>
      </div>
    </div>
  );
}

export default GenreFilter;
