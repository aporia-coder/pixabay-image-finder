import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    justifyContent: "center",
  },
});

export const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <Typography variant="h4">Instant Images</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
