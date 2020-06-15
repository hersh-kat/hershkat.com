import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import "../../css/animatedBorder.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "350px",
    border: "1px solid rgba(128, 128, 128, 0.4)",
    animationName: "fadeIn",
    animationDelay: "0.1s",
    color: "rgb(221,221,221)",
    borderRadius: "5px",
    marginBottom: "10px",
    marginTop: "10px",
    padding: "5px",
    "&:hover": {
      borderColor: "rgba(128, 128, 128)",
    },
  },
  chip: {
    color: theme.palette.secondary.main,
    opacity: 0.7,
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
