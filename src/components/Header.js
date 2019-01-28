import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  logo: {
    height: "20vmin"
  },

  header: {
    backgroundColor: "#d7e7ef",
    height: "20vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "#ab0f59",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px"
  }
});

const Header = ({ classes, children }) => (
  <header className={classes.header}>
    <img
      className={classes.logo}
      src="https://i0.wp.com/stority.de/wp-content/uploads/Sealed-small-box@1080.png?fit=1080%2C1080&ssl=1"
      alt="logo"
    />
    <h1>Customers</h1>
    <div className={classes.controls}>{children}</div>
  </header>
);

export default withStyles(styles)(Header);
