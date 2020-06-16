import React from "react";
import Grid from "@material-ui/core/Grid";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { Typography } from "@material-ui/core";
import bitmoji from "../../assets/bitmoji.svg";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import ScrollableAnchor from "react-scrollable-anchor";

const useStyles = makeStyles((theme) => ({
  sectionStyle: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    paddingTop: "150px",
    paddingBottom: "100px",
  },
  headerStyle: {
    ...theme.headerTransition,
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <section className={classes.sectionStyle}>
      <Grid container direction="column" spacing={2}>
        <ScrollableAnchor id={"about"}>
          <Grid
            container
            item
            direction="row"
            spacing={1}
            className={classes.headerStyle}
          >
            <Grid item>
              <EmojiEmotionsIcon fontSize="small" />
            </Grid>
            <Grid item>
              <Typography variant="h2">About Me</Typography>
            </Grid>
          </Grid>
        </ScrollableAnchor>

        <Grid container item direction="row">
          <Grid item container direction="column" spacing={2} xs={12} md={8}>
            <Grid item>
              <Typography>
                Hi there! 👋🏼
                <br />
                I’m Hersh, a Software Engineer based in London with a passion
                for everything tech. After graduating from the University of
                Warwick in Computer Systems Engineering, I decided to take a
                unique path by working as the National President of KCSOC for a
                year. I’m now looking to work for an exciting, vibrant
                technology company where I can channel my leadership, creativity
                and technical skills that I have developed over the years.
                <br />
                <br />I created this website to showcase my experience, skills
                and various technical projects. If you’d like to get in touch
                with me via email, feel free to hit the button below.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                href="mailto:katariahersh@gmail.com"
                variant="outlined"
                color="secondary"
              >
                Get In Touch
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={bitmoji} />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
