import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  ulColumns: {
    [theme.breakpoints.up("md")]: {
      columns: 2,
    },
    ...theme.typography.ul,
    fontSize: "0.9rem",
  },
  ul: {
    ...theme.typography.ul,
  },
  li: {
    ...theme.typography.li,
  },
  grid1: {
    paddingBottom: "10px",
  },
}));

export default function EducationContentHolder({
  title,
  subtitle1,
  subtitle2,
  resultsName,
  results,
  columns,
  imgComponent,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        spacing={2}
        alignItems="center"
        style={{ paddingBottom: "10px" }}
      >
        <Grid item>{imgComponent}</Grid>
        <Grid item container direction="column" xs>
          <Grid item>
            <Typography variant="h3">{title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{subtitle1}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{subtitle2}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Typography
            variant="body2"
            style={{ fontWeight: 500, paddingBottom: "10px" }}
          >
            {resultsName}
          </Typography>
          <ul className={columns ? classes.ulColumns : classes.ul}>
            {results &&
              columns &&
              results.map((string) => {
                const res = string.split(",");
                return (
                  <li className={classes.li} key={res[0]}>
                    {res[0]}: {res[1]}
                  </li>
                );
              })}
            {results &&
              !columns &&
              results.map((string, index) => (
                <li className={classes.li} key={index}>
                  {string}
                </li>
              ))}
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
