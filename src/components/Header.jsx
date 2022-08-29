import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Header</h1>
      <nav>
        <Link to="/">HomePage</Link>
        <Link to="/projects">ProjetsPage</Link>
        <Link to="/styled-page">StyledPage</Link>
      </nav>
    </div>
  );
};

export default Header;
