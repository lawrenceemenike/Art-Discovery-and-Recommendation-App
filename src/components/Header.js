import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">Art Discovery</div>
      <input type="search" placeholder="Search artworks..." />
      <button className="favorites-icon">❤️</button>
    </header>
  );
}

export default Header;