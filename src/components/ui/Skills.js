import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CodeIcon from "@material-ui/icons/Code";
import SkillsContainer from "./SkillsContainer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";
import ScrollableAnchor from "react-scrollable-anchor";
import { graphql, useStaticQuery } from "gatsby";

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
}));

export default function Skills() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const data = useStaticQuery(graphql`
    {
      allSkillsJson {
        edges {
          node {
            id
            icon {
              publicURL
            }
            title
            skills
          }
        }
      }
    }
  `);

  return (
    <section className={classes.sectionStyle}>
      <ScrollableAnchor id="skills">
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
      </ScrollableAnchor>
      <Grid
        container
        direction={matches ? "column" : "row"}
        alignItems="center"
      >
        {data.allSkillsJson.edges.map(({ node }) => (
          <Grid item key={node.title} lg={4} md={6} xs={12}>
            <SkillsContainer
              icon={node.icon.publicURL}
              title={node.title}
              skills={node.skills}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
