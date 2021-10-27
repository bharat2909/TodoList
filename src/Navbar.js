import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2>My Todo-List</h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/create">Add New</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
