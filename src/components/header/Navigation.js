import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={classes.header__nav}>
      <nav>
        <a className={classes.navlink} href="#">
          Gladys
        </a>
        <a className={classes.navlink} href="#about">
          About
        </a>
        <a className={classes.navlink} href="#Projects">
          Projects
        </a>
        <a className={classes.navlink} href="#contact">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
