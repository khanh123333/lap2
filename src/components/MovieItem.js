import React from 'react';

function MovieItem({
  movie,
  isFavorite,
  isSelected,
  onToggleFavorite,
  onSelectMovie,
}) {
  return (
    <div className={`movie-item-card ${isSelected ? 'selected' : ''}`}>
      {/* Bên trái: Ngôi sao + Tên phim */}
      <div className="movie-item-left">
        <button
          type="button"
          className={`star-icon-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={() => onToggleFavorite(movie.id)}
          title={isFavorite ? 'Bỏ thích' : 'Yêu thích'}
        >
          {isFavorite ? '★' : '☆'}
        </button>
        <span className="movie-item-title">{movie.title}</span>
      </div>

      {/* Bên phải (có viền ngăn cách): Thể loại, năm, rating và nút thao tác */}
      <div className="movie-item-right">
        <div className="movie-meta-row">
          <span className="movie-item-genre">{movie.genre}</span>
          <span className="movie-item-separator">|</span>
          <span className="movie-item-year">{movie.year}</span>
          <span className="movie-item-separator">|</span>
          <span className="movie-item-rating">★ {movie.rating}</span>
        </div>

        <div className="movie-item-actions">
          <button
            type="button"
            className={`action-btn fav-btn ${isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(movie.id)}
          >
            {isFavorite ? 'Bỏ thích' : 'Yêu thích'}
          </button>
          <button
            type="button"
            className="action-btn detail-btn"
            onClick={() => onSelectMovie(movie)}
          >
            Chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
