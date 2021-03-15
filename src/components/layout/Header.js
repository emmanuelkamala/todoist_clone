import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

function Header() {
  return (
    <div className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="../../images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li><FaPizzaSlice /></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;
