import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/Logo.svg";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

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
  icon: {
    marginRight: theme.spacing(0.5),
    width: 16,
    height: 16,
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
    borderRadius: "20px",
  },
  linkHover: {
    "&:hover": {
      color: theme.palette.common.green,
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <img src={logo} className={classes.logo} alt="Website Logo" />
            <Breadcrumbs
              className={classes.breadcrumb}
              classes={{
                separator: classes.separator,
              }}
              aria-label="breadcrumb"
            >
              <Link
                color="textPrimary"
                href="/"
                onClick={handleClick}
                className={classes.link}
                classes={{
                  underlineHover: classes.linkHover,
                }}
              >
                About
              </Link>
              <Link
                color="textPrimary"
                href="/getting-started/installation/"
                onClick={handleClick}
                className={classes.link}
                classes={{
                  underlineHover: classes.linkHover,
                }}
              >
                Education
              </Link>
              <Link
                color="textPrimary"
                href="/getting-started/installation/"
                onClick={handleClick}
                className={classes.link}
                classes={{
                  underlineHover: classes.linkHover,
                }}
              >
                Work
              </Link>
            </Breadcrumbs>
            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
            >
              CV
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
