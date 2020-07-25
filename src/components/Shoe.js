import React from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  center: {
    textAlign: "center",
  },
}));

function Shoe() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.center}> Shoes</h1>
      <Outlet />
    </div>
  );
}

export default Shoe;
