import React from "react";
import "./Header.css";

const Header = (props) => {
  const description = props.Desc;
  return (
    <header className="header">
      <h1 id="title" className="text-center">
        Squirrel Database
      </h1>
      <p id="description" className="text-center">
        {description}
      </p>
    </header>
  );
};

export default Header;
