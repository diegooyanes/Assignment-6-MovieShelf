import { useState } from 'react';

function MovieCard({ movie, onRemoveFavorite }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some((favorite) => favorite.id === movie.id);
  });

  function toggleFavorite() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updatedFavorites = isFavorite
      ? favorites.filter((favorite) => favorite.id !== movie.id)
      : [...favorites.filter((favorite) => favorite.id !== movie.id), movie];

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
    if (isFavorite) onRemoveFavorite?.(movie.id);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <span className="movie-rating">⭐ {movie.vote_average}</span>
          <span className="movie-year">{movie.release_date?.slice(0, 4) || '—'}</span>
        </div>
        <button className={`favorite-button ${isFavorite ? 'favorited' : ''}`} onClick={toggleFavorite}>
          {isFavorite ? '♥ Remove from Favorites' : '♡ Add to Favorites'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
