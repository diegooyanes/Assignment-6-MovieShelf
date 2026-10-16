import { useEffect, useState } from 'react';
import MovieGrid from '../components/MovieGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { getPopularMovies } from '../services/movieService';

function Home({ searchResults, searchLoading, searchError }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movieData = await getPopularMovies();
        setMovies(movieData);
      } catch {
        setError('Unable to load movies. Please check your connection and try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  const isSearching = searchLoading || searchError || searchResults !== null;
  const displayMovies = searchResults !== null ? searchResults : movies;
  const displayLoading = isSearching ? searchLoading : loading;
  const displayError = isSearching ? searchError : error;

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>{isSearching ? 'Search Results' : 'Popular Movies'}</h2>
        <p>Discover and save your favorite films</p>
      </div>
      {displayLoading ? <LoadingSpinner /> : displayError ? (
        <ErrorMessage message={displayError} />
      ) : displayMovies.length > 0 ? (
        <MovieGrid movies={displayMovies} />
      ) : (
        <div className="empty-state"><p>No movies found.</p></div>
      )}
    </main>
  );
}

export default Home;
