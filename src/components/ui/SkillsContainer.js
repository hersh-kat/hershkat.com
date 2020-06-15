import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import "../../css/animatedBorder.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "350px",
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
    opacity: 0.8,
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));

export default function SkillsContainer({ icon, title, skills }) {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      spacing={2}
      alignItems="center"
    >
      <Grid item>
        <img src={icon}></img>
      </Grid>
      <Grid item container direction="column" spacing={1} xs>
        <Grid item>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item container direction="row" spacing={1}>
          {skills.map((skill) => (
            <Grid key={skill} item>
              <Chip variant="outlined" className={classes.chip} label={skill} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
