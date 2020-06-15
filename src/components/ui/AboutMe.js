import React from "react";
import Grid from "@material-ui/core/Grid";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { Typography } from "@material-ui/core";
import bitmoji from "../../assets/bitmoji.svg";
import { makeStyles } from "@material-ui/styles";
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

export default function AboutMe(props) {
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
          <Grid item xs={12} md={8}>
            <Typography>
              I'm baby gastropub umami distillery direct trade tumblr brunch +1
              chartreuse woke man braid beard wolf palo santo. Pork belly twee
              taiyaki umami marfa, vexillologist chillwave post-ironic af 8-bit
              drinking vinegar vegan artisan. Tumblr lo-fi authentic freegan,
              disrupt cloud bread ennui meditation food truck keytar fanny pack
              man braid. Single-origin coffee pop-up ethical drinking vinegar
              banh mi bitters venmo meh. Prism hammock dreamcatcher mumblecore
              post-ironic YOLO lumbersexual activated charcoal. Dreamcatcher
              fashion axe hoodie PBR&B plaid direct trade sartorial occupy
              kinfolk. <br /> <br />
              Typewriter church-key woke squid, selvage mustache kombucha four
              loko gastropub asymmetrical craft beer coloring book fanny pack.
              Cardigan jianbing glossier kogi, jean shorts biodiesel ethical
              subway tile. Cold-pressed coloring book snackwave, before they
              sold out raw denim kale chips adaptogen. Glossier chia vaporware
              palo santo 90's raclette, tilde irony quinoa. Enamel pin
              microdosing tilde, lo-fi brunch aesthetic tofu la croix iceland
              synth wolf knausgaard. Taiyaki taxidermy letterpress
              intelligentsia helvetica. Keytar edison bulb fingerstache umami
              readymade letterpress brooklyn tattooed iPhone yr man bun
              williamsburg biodiesel seitan banjo. Ethical gastropub la croix
              organic woke iceland meggings selvage.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={bitmoji} />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
