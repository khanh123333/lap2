import React from 'react';
import MovieItem from './MovieItem';

function MovieList({
  movies,
  totalCount,
  favoritesCount,
  favorites,
  selectedMovie,
  onToggleFavorite,
  onSelectMovie,
}) {
  return (
    <div className="movie-list-section">
      <div className="stats-bar">
        <span>Tổng: {totalCount}</span>
        <span className="stats-separator">|</span>
        <span>Yêu thích: {favoritesCount}</span>
        <span className="stats-separator">|</span>
        <span>Đang hiển thị: {movies.length}</span>
      </div>

      <div className="movie-items-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              isFavorite={favorites.includes(movie.id)}
              isSelected={selectedMovie?.id === movie.id}
              onToggleFavorite={onToggleFavorite}
              onSelectMovie={onSelectMovie}
            />
          ))
        ) : (
          <div className="empty-movies-message">
            <p>Không tìm thấy phim nào phù hợp với tìm kiếm / bộ lọc.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieList;
