export const Skeleton = () => {
  return (
    <div className="skeleton-grid" id="skeletonGrid" style={{ display: 'none' }}>
      {/* Example skeleton cards - duplicate as needed */}
      <div className="skeleton-card">
        <div className="skeleton-poster"></div>
        <div className="skeleton-info">
          <div className="skeleton-line title"></div>
          <div className="skeleton-line year"></div>
          <div className="skeleton-line overview"></div>
          <div className="skeleton-line overview"></div>
          <div className="skeleton-line overview"></div>
        </div>
      </div>
      //TODO: Add more skeleton cards programmatically based on expected results
    </div>
  );
};
