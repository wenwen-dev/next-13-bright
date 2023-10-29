'use client';

import React from 'react';

function Revealable({ children }) {
  const [isShown, setIsShown] = React.useState(false);

  if (isShown) {
    return <>{children}</>;
  }

  return (
    <div className='reveal'>
      <button onClick={() => setIsShown(true)}>Reveal Content</button>
    </div>
  );
}

export default Revealable;
