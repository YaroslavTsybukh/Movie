export const EmptyState = () => {
  return (
    <div className="empty-state" id="emptyState" style={{ display: 'none' }}>
      <h3>No movies found</h3>
      <p>Try searching with different keywords or check your spelling.</p>
    </div>
  );
};
