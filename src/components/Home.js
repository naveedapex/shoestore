import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: "center",
  },
}));

function Home() {
    const classes = useStyles();
  return <h1 className={classes.center}>Welcome Home</h1>;
}

export default Home;