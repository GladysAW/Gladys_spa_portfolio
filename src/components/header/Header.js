import React from "react";
import classes from "./Header.module.scss";
import Navigation from "./Navigation";
import Introduction from "./Introduction";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <Navigation />
      <Introduction />
    </div>
  );
};

export default Header;
