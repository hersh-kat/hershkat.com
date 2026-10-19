import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import MicIcon from "@material-ui/icons/Mic";
import LaunchIcon from "@material-ui/icons/Launch";
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
  card: {
    color: "rgb(221,221,221)",
    borderRadius: "5px",
    marginBottom: "20px",
    marginTop: "10px",
    padding: "25px",
    backgroundColor: "rgb(23,41, 69)",
    [theme.breakpoints.down("sm")]: {
      padding: "15px",
    },
  },
  meta: {
    color: theme.palette.secondary.main,
    fontFamily: "Fira Code",
    fontSize: "0.85rem",
  },
  quote: {
    borderLeft: `2px solid ${theme.palette.secondary.main}`,
    paddingLeft: "15px",
    fontStyle: "italic",
  },
  images: {
    display: "grid",
    gap: "10px",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(var(--count), 1fr)",
      height: "240px",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  imageLink: {
    overflow: "hidden",
    borderRadius: "5px",
    minHeight: 0,
  },
}));

export default function Speaking() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    {
      allSpeakingJson {
        edges {
          node {
            id
            title
            role
            meta
            summary
            quote
            quoteBy
            images {
              publicURL
            }
            links {
              label
              url
            }
          }
        }
      }
    }
  `);

  return (
    <section className={classes.sectionStyle}>
      <ScrollableAnchor id="speaking">
        <Grid
          container
          direction="row"
          spacing={1}
          className={classes.headerStyle}
        >
          <Grid item>
            <MicIcon fontSize="small" />
          </Grid>
          <Grid item>
            <Typography variant="h2">Speaking & Hosting</Typography>
          </Grid>
        </Grid>
      </ScrollableAnchor>
      {data.allSpeakingJson.edges.map(({ node }) => (
        <Grid
          container
          direction="column"
          spacing={2}
          key={node.id}
          className={classes.card}
        >
          <Grid item>
            <Typography variant="h3">{node.title}</Typography>
            <Typography variant="body2" style={{ fontWeight: 500 }}>
              {node.role}
            </Typography>
            <Typography className={classes.meta}>{node.meta}</Typography>
          </Grid>
          <Grid item>
            {node.summary.map((paragraph, i) => (
              <Typography
                variant="body2"
                key={i}
                style={{ paddingBottom: "8px" }}
              >
                {paragraph}
              </Typography>
            ))}
            {node.quote && (
              <Typography variant="body2" className={classes.quote}>
                “{node.quote}” – {node.quoteBy}
              </Typography>
            )}
          </Grid>
          {node.links && (
            <Grid item container direction="row" spacing={2}>
              {node.links.map((link) => (
                <Grid item key={link.url}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<LaunchIcon />}
                  >
                    {link.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          )}
          <Grid item>
            <div
              className={classes.images}
              style={{ "--count": node.images.length }}
            >
              {node.images.map((img) => (
                <a
                  key={img.publicURL}
                  href={img.publicURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.imageLink}
                >
                  <img
                    className={classes.image}
                    src={img.publicURL}
                    alt={node.title}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </Grid>
        </Grid>
      ))}
    </section>
  );
}
