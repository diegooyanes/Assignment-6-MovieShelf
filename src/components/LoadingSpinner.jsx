function LoadingSpinner() {
  return (
    <div className="loading-container" role="status">
      <div className="spinner" aria-hidden="true" />
      <p>Loading movies...</p>
    </div>
  );
}

export default LoadingSpinner;
