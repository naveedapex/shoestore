import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: "center",
  },
}));

function Contact() {
  const classes = useStyles();
  return <h1 className={classes.center}>Contact Us</h1>;
}

export default Contact;
