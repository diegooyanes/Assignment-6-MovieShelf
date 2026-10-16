const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export async function getPopularMovies() {
  const url = new URL(`${BASE_URL}/movie/popular`);
  url.searchParams.set('api_key', API_KEY);
  const response = await fetch(url);
  if (!response.ok) throw new Error('Unable to load movies from TMDB. Please try again.');
  const data = await response.json();
  return data.results;
}

export async function searchMovies(query) {
  const url = new URL(`${BASE_URL}/search/movie`);
  url.searchParams.set('api_key', API_KEY);
  url.searchParams.set('query', query);
  const response = await fetch(url);
  if (!response.ok) throw new Error('Unable to load movies from TMDB. Please try again.');
  const data = await response.json();
  return data.results;
}
