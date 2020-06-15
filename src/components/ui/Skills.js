import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CodeIcon from "@material-ui/icons/Code";
import { skillsData } from "../../data/skills";
import SkillsContainer from "./SkillsContainer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  sectionStyle: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  headerStyle: {
    paddingBottom: "10px",
    ...theme.headerTransition,
  },
  skillsStyle: {
    //paddingBottom: "10px",
    //paddingTop: "10px",
  },
}));

export default function Skills() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section className={classes.sectionStyle}>
      <Grid
        container
        direction="row"
        spacing={1}
        className={classes.headerStyle}
      >
        <Grid item>
          <CodeIcon fontSize="small" />
        </Grid>
        <Grid item>
          <Typography variant="h2">Skills</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction={matches ? "column" : "row"}
        alignItems="center"
      >
        {skillsData.map(({ icon, title, skills }) => (
          <Grid item key={title} md={4} xs={12} className={classes.skillsStyle}>
            <SkillsContainer icon={icon} title={title} skills={skills} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
