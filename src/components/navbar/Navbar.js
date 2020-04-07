import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">Instant Images</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
