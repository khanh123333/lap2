import React from 'react';

function MovieDetail({ movie, onClose }) {
  if (!movie) {
    return (
      <div className="movie-detail-card placeholder">
        <h2 className="detail-title">Movie Details</h2>
        <div className="detail-placeholder-content">
          <p>👉 Vui lòng chọn một bộ phim và nhấn <strong>[Chi tiết]</strong> để xem thông tin chi tiết.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-detail-card">
      <div className="detail-header-row">
        <h2 className="detail-title">Movie Details</h2>
      </div>

      <div className="detail-divider" />

      <div className="detail-info-list">
        <div className="detail-field">
          <span className="field-label">Title:</span>
          <span className="field-value title-val">{movie.title}</span>
        </div>
        <div className="detail-field">
          <span className="field-label">Genre:</span>
          <span className="field-value">{movie.genre}</span>
        </div>
        <div className="detail-field">
          <span className="field-label">Year:</span>
          <span className="field-value">{movie.year}</span>
        </div>
        <div className="detail-field">
          <span className="field-label">Rating:</span>
          <span className="field-value rating-val"> {movie.rating}</span>
        </div>
        <div className="detail-field">
          <span className="field-label">Director:</span>
          <span className="field-value">{movie.director}</span>
        </div>
        <div className="detail-field">
          <span className="field-label">Duration:</span>
          <span className="field-value">{movie.duration} minutes</span>
        </div>
      </div>

      <div className="detail-description-block">
        <h3 className="description-heading">Description:</h3>
        <p className="description-text">{movie.description}</p>
      </div>

      <div className="detail-footer-action">
        <button
          type="button"
          className="close-bottom-btn"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default MovieDetail;
