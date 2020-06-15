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
    columns: 2,
    ...theme.typography.ul,
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
  logo,
  title,
  subtitle1,
  subtitle2,
  resultsName,
  results,
  columns,
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
        <Grid item>
          <img style={{ margin: "auto" }} src={logo} />
        </Grid>
        <Grid item container direction="column" xs>
          <Grid item>
            <Typography variant="h3">{title}</Typography>
          </Grid>
          <Grid item>
            <Typography>{subtitle1}</Typography>
          </Grid>
          <Grid item>
            <Typography>{subtitle2}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Typography style={{ textDecoration: "bold", paddingBottom: "10px" }}>
            {resultsName}
          </Typography>
          <ul className={columns ? classes.ulColumns : classes.ul}>
            {results &&
              columns &&
              Object.entries(results).map(([key, value]) => (
                <li className={classes.li} key={key}>
                  {key}: {value}
                </li>
              ))}
            {results &&
              !columns &&
              Object.entries(results).map(([key, value]) => (
                <li className={classes.li} key={key}>
                  {value}
                </li>
              ))}
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
