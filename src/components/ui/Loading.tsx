export const Loading = () => {
  return (
    <div className="loading" id="loadingState" style={{ display: 'none' }}>
      <div className="loading-spinner"></div>
      <p>Searching for movies...</p>
    </div>
  );
};
