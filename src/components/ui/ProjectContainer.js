import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px",
    height: "300px",
    animationName: "fadeIn",
    animationDelay: "0.1s",
    color: "rgb(221,221,221)",
    borderRadius: "5px",
    marginBottom: "10px",
    marginTop: "10px",
    padding: "5px",
    backgroundColor: "rgb(23,41, 69)",
    "vertical-align": "middle",
    "-webkit-transform": "perspective(1px) translateZ(0)",
    transform: "perspective(1px) translateZ(0)",
    "box-shadow": "0 0 1px rgba(0, 0, 0, 0)",
    "-webkit-transition-duration": "0.3s",
    "transition-duration": "0.3s",
    "-webkit-transition-property": "transform",
    "transition-property": "transform",
    "-webkit-transition-timing-function": "ease-out",
    "transition-timing-function": "ease-out",
    "&:hover, &:focus, &:active": {
      "-webkit-transform": "translateY(-3px)",
      transform: "translateY(-3px)",
    },
  },
  chip: {
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  linkHover: {
    color: "white",
    ...theme.textLinkTransition,
  },
}));

export default function ProjectContainer({
  title,
  icon,
  githublink,
  weblink,
  summary,
  tags,
}) {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2} className={classes.root}>
      <Grid item container direction="row" className="row1">
        <Grid item>
          <img src={icon} />
        </Grid>
        <Grid item container xs direction="row" spacing={2} justify="flex-end">
          <Grid hidden={githublink ? false : true} item>
            <Link className={classes.linkHover} href={githublink}>
              <GitHubIcon />
            </Link>
          </Grid>
          <Grid hidden={weblink ? false : true} item>
            <Link className={classes.linkHover} href={weblink}>
              <LaunchIcon />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid item>
          <Typography>{summary}</Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        spacing={2}
        style={{ marginTop: "auto" }}
      >
        {tags &&
          tags.map((skill) => (
            <Grid key={skill} item>
              <Chip variant="outlined" className={classes.chip} label={skill} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}
