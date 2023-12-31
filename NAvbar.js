import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Search Results</Link>
        </li>
        <li>
          <Link to="/movies/:id">Movie Detail</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
