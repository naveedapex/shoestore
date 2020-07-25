import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: "center",
  },
}));

function About() {
  const classes = useStyles();
  return <h1 className={classes.center}> About us</h1>;
}

export default About;
