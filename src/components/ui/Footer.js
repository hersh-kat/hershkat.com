import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerStyle: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footerStyle}>
      <Typography color="textPrimary">Built by Hersh Kataria.</Typography>
    </footer>
  );
}
