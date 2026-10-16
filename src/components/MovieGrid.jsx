import MovieCard from './MovieCard';

function MovieGrid({ movies, onRemoveFavorite }) {
  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onRemoveFavorite={onRemoveFavorite} />
      ))}
    </div>
  );
};

export default MovieGrid;
