import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import me from "../../assets/me.svg";
import nameImage from "../../assets/HershKataria.svg";
import GithubIcon from "../../assets/github";
import InstagramIcon from "../../assets/instagram";
import LinkedInIcon from "../../assets/linkedin";
import SpotifyIcon from "../../assets/spotify";
import ScrollableAnchor from "react-scrollable-anchor";
import TypeAnimation from "../TypeAnimation";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  sectionStyle: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0px",
      paddingBottom: "50px",
    },
    paddingTop: "150px",
    minHeight: "100vh",
  },
  typeAnimationStyle: {
    fontSize: "1.5em",
    fontFamily: "Fira Code",
    textAlign: "start",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
  },
  imageStyle: {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "90%",
      margin: "auto",
      display: "block",
    },
  },
  heroImageStyle: {
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "80%",
      margin: "auto",
      display: "block",
    },
  },
  spotifyIcon: {
    color: "#1ED760",
    ...theme.iconLinkTransition,
  },
  githubIcon: {
    ...theme.iconLinkTransition,
  },
  instagramIcon: {
    color: "#E4405F",
    ...theme.iconLinkTransition,
  },
  linkedinIcon: {
    color: "#0077B5",
    ...theme.iconLinkTransition,
  },
  iconTransition: {
    color: "white",
    ...theme.textLinkTransition,
  },
}));

const outerContainerProps = {
  direction: "row",
  alignItems: "center",
  spacing: 10,
};

const imageContainerProps = {
  xs: 12,
  md: 4,
  alignItems: "center",
  justify: "center",
};

const textContainerProps = {
  xs: 12,
  md: 8,
  direction: "column",
  justify: "center",
  spacing: 7,
};

const iconContainerProps = {
  direction: "row",
  spacing: 5,
};

export default function Hero() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  if (matches) {
    outerContainerProps.direction = "column";
    outerContainerProps.spacing = 5;
    textContainerProps.alignItems = "center";
    textContainerProps.spacing = 3;
    iconContainerProps.justify = "center";
  } else {
    outerContainerProps.direction = "row";
    outerContainerProps.spacing = 10;
    textContainerProps.alignItems = "flex-start";
    textContainerProps.spacing = 7;
    iconContainerProps.justify = "flex-start";
  }

  return (
    <section className={classes.sectionStyle}>
      <Grid container direction="column" alignItems="center">
        <Grid
          container
          item
          {...outerContainerProps}
          style={{ marginTop: "auto" }}
        >
          <ScrollableAnchor id={"hero"}>
            <Grid container item {...imageContainerProps}>
              <Grid item>
                <img
                  src={me}
                  alt="Hersh Kataria"
                  className={classes.heroImageStyle}
                />
              </Grid>
            </Grid>
          </ScrollableAnchor>
          <Grid container item {...textContainerProps}>
            <Grid item>
              <img
                alt="Name Text Watercolour"
                className={classes.imageStyle}
                src={nameImage}
              />
            </Grid>
            <Grid item>
              <Typography className={classes.typeAnimationStyle}>
                <TypeAnimation
                  strings={[
                    "Developer. ^1000 Designer.\n^1000Self-Starter. ^1000 Creator.",
                  ]}
                />
              </Typography>
            </Grid>
            <Grid container item {...iconContainerProps}>
              <Grid
                item
                onClick={() => window.open("https://bit.ly/hershgithub")}
              >
                <GithubIcon className={classes.githubIcon} />
              </Grid>
              <Grid
                item
                onClick={() => window.open("https://bit.ly/hershlinkedin")}
              >
                <LinkedInIcon className={classes.linkedinIcon} />
              </Grid>
              <Grid
                item
                onClick={() => window.open("https://bit.ly/hershinsta")}
              >
                <InstagramIcon className={classes.instagramIcon} />
              </Grid>
              <Grid
                item
                onClick={() => window.open("https://bit.ly/hershkcsoc")}
              >
                <SpotifyIcon className={classes.spotifyIcon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ paddingTop: "5em" }}>
          <Link href="#about" className={classes.iconTransition}>
            <ArrowDropDownCircleOutlinedIcon style={{ fontSize: 30 }} />
          </Link>
        </Grid>
      </Grid>
    </section>
  );
}
