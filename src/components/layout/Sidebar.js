import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li>Inbox</li>
        <li>Today</li>
        <li>Next 7 Days</li>
      </ul>
    </div>
  )
}

export default Sidebar;
