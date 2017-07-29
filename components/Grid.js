import React from 'react';

function Grid({ width, center, children }) {
  const margin = center ? { margin: '0 auto' } : {};

  return (
    <div
      className="grid"
      style={{
        maxWidth: width,
        padding: '16px',
        ...margin,
      }}
    >
      {children}
    </div>
  );
}

Grid.defaultProps = {
  width: 1000,
  center: true,
};

export default Grid;
