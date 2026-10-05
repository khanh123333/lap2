import React, { useState, useMemo } from 'react';
import { movies as initialMovies } from './data/movies';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import useLocalStorage from './hooks/useLocalStorage';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

function MovieManagerApp() {
  const { theme } = useTheme();
  const [movies] = useState(initialMovies);
  const [favorites, setFavorites] = useLocalStorage('movie_favorites', [2]); // Default favorite item like in diagram
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [sortBy, setSortBy] = useState('default');
  const [selectedMovie, setSelectedMovie] = useState(null); // Mặc định hiển thị trang danh sách phim

  // List of genres matching lab requirements
  const genres = useMemo(() => {
    const list = Array.from(new Set(movies.map((m) => m.genre)));
    // Ensure all required genres are included
    const required = ['Action', 'Animation', 'Comedy', 'Drama', 'Romance', 'Sci-Fi'];
    return Array.from(new Set([...required, ...list]));
  }, [movies]);

  // Filter and sort movies (working together: Search + Genre Filter + Rating Sort)
  const filteredAndSortedMovies = useMemo(() => {
    let result = [...movies];

    // 1. Search movies by title (case-insensitive, updates automatically while typing)
    if (searchTerm.trim()) {
      const lowerSearch = searchTerm.toLowerCase().trim();
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(lowerSearch)
      );
    }

    // 2. Filter movies by genre (If All Genres is selected, display all)
    if (selectedGenre !== 'All Genres') {
      result = result.filter((movie) => movie.genre === selectedGenre);
    }

    // 3. Sort movies by rating
    result.sort((a, b) => {
      switch (sortBy) {
        case 'rating-desc': // Rating: High → Low
          return b.rating - a.rating;
        case 'rating-asc': // Rating: Low → High
          return a.rating - b.rating;
        case 'default':
        default:
          return a.id - b.id;
      }
    });

    return result;
  }, [movies, searchTerm, selectedGenre, sortBy]);

  // Toggle favorite status
  const handleToggleFavorite = (movieId) => {
    setFavorites((prev) => {
      if (prev.includes(movieId)) {
        return prev.filter((id) => id !== movieId);
      } else {
        return [...prev, movieId];
      }
    });
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      <div className="app-container">
        <Header />

        <main className="main-content-layout">
          {selectedMovie ? (
            /* TRANG RIÊNG: Chi tiết bộ phim */
            <section className="detail-page-container">
              <MovieDetail
                movie={selectedMovie}
                onClose={() => setSelectedMovie(null)}
              />
            </section>
          ) : (
            /* TRANG DANH SÁCH PHIM */
            <section className="list-page-container">
              <div className="controls-box">
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                />
                <GenreFilter
                  genres={genres}
                  selectedGenre={selectedGenre}
                  onGenreChange={setSelectedGenre}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                />
              </div>

              <MovieList
                movies={filteredAndSortedMovies}
                totalCount={movies.length}
                favoritesCount={favorites.length}
                favorites={favorites}
                selectedMovie={selectedMovie}
                onToggleFavorite={handleToggleFavorite}
                onSelectMovie={setSelectedMovie}
              />
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MovieManagerApp />
    </ThemeProvider>
  );
}
