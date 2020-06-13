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

const useStyles = makeStyles((theme) => ({
  sectionStyle: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    paddingTop: "150px",
    paddingBottom: "150px",
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
    iconContainerProps.justify = "center";
  } else {
    outerContainerProps.direction = "row";
    outerContainerProps.spacing = 10;
    textContainerProps.alignItems = "flex-start";
    iconContainerProps.justify = "flex-start";
  }

  return (
    <section className={classes.sectionStyle}>
      <Grid container {...outerContainerProps}>
        <Grid container item {...imageContainerProps}>
          <Grid item>
            <img src={me} />
          </Grid>
        </Grid>
        <Grid container item {...textContainerProps}>
          <Grid item>
            <img src={nameImage} />
          </Grid>
          <Grid item>
            <Typography>
              Skateboard vinyl sustainable, waistcoat enamel pin echo park lo-fi
              biodiesel cardigan. Semiotics offal quinoa sriracha. XOXO roof
              party sartorial chambray craft beer green juice lumbersexual. Put
              a bird on it mumblecore echo park hella offal YOLO yr trust fund
              keytar slow-carb bushwick ennui typewriter hell of copper mug.
            </Typography>
          </Grid>
          <Grid container item {...iconContainerProps}>
            <Grid item>
              <GithubIcon className={classes.githubIcon} />
            </Grid>
            <Grid item>
              <LinkedInIcon className={classes.linkedinIcon} />
            </Grid>
            <Grid item>
              <InstagramIcon className={classes.instagramIcon} />
            </Grid>
            <Grid item>
              <SpotifyIcon className={classes.spotifyIcon} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>{" "}
    </section>
  );
}
