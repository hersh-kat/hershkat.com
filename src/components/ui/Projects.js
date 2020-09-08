import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import ProjectsContainer from "./ProjectContainer";
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

export default function Projects() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            icon {
              publicURL
            }
            title
            summary
            tags
            githublink
          }
        }
      }
    }
  `);
  return (
    <section className={classes.sectionStyle}>
      <ScrollableAnchor id="projects">
        <Grid
          container
          direction="row"
          spacing={1}
          className={classes.headerStyle}
        >
          <Grid item>
            <GitHubIcon fontSize="small" />
          </Grid>
          <Grid item>
            <Typography variant="h2">Projects</Typography>
          </Grid>
        </Grid>
      </ScrollableAnchor>
      <Grid
        container
        direction={matches ? "column" : "row"}
        alignItems="center"
      >
        {data.allProjectsJson.edges.map(({ node }) => (
          <Grid
            item
            key={node.title}
            md={4}
            xs={12}
            className={classes.skillsStyle}
          >
            <ProjectsContainer
              title={node.title}
              icon={node.icon.publicURL}
              summary={node.summary}
              githublink={node.githublink}
              weblin={node.weblink}
              tags={node.tags}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
