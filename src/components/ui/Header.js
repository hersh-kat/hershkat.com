import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/Logo.svg";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: "2.5rem",
  },
  link: {
    display: "flex",
    textTransform: "uppercase",
    fontWeight: 500,
    fontSize: "0.8rem",
    letterSpacing: "0.1rem",
  },
  menuIcon: {
    marginLeft: "auto",
  },
  separator: {
    color: theme.palette.common.green,
  },
  breadcrumb: {
    marginLeft: "auto",
  },
  button: {
    ...theme.typography.button,
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "30px",
    },
    borderRadius: "20px",
  },
  linkHover: {
    "&:hover": {
      color: theme.palette.common.green,
    },
  },
}));

export default function Header(props) {
  const pageNames = ["About", "Education", "Work", "Skills", "Projects"];
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const cvButton = (
    <Button className={classes.button} variant="outlined" color="secondary">
      CV
    </Button>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
        <List component="nav">
          {pageNames.map((page) => (
            <ListItem onClick={() => setOpenDrawer(false)} key={page} button>
              <ListItemText className={classes.link}>{page}</ListItemText>
            </ListItem>
          ))}
          {cvButton}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.menuIcon}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="secondary" />
      </IconButton>
    </React.Fragment>
  );

  const linkProps = {
    color: "textPrimary",
    href: "/",
    className: classes.link,
    classes: {
      underlineHover: classes.linkHover,
    },
  };

  const breadcrumb = (
    <React.Fragment>
      <Breadcrumbs
        className={classes.breadcrumb}
        classes={{
          separator: classes.separator,
        }}
        aria-label="breadcrumb"
      >
        {pageNames.map((page) => (
          <Link key={page} {...linkProps}>
            {page}
          </Link>
        ))}
      </Breadcrumbs>
      {cvButton}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {" "}
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <img src={logo} className={classes.logo} alt="Website Logo" />
            {matches ? drawer : breadcrumb}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
