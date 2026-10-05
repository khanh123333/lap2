import React, { useEffect, useRef } from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Automatic focus on the search input when mounted
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="search-bar-container">
      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder="Tìm tên phim..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {searchTerm && (
        <button 
          className="search-clear-btn" 
          onClick={() => onSearchChange('')}
          type="button"
          title="Xóa tìm kiếm"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
