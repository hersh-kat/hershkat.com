import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabsContentHolder from "./TabsContentHolder";
import { uniData, aLevelData, gcseData } from "../../data/educationData";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SchoolIcon from "@material-ui/icons/School";
import ScrollableAnchor from "react-scrollable-anchor";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      item
      xs
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <React.Fragment>{children}</React.Fragment>}
    </Grid>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    height: 224,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  sectionStyle: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "50px",
      paddingBottom: "50px",
      width: "auto",
    },
    paddingTop: "100px",
    paddingBottom: "100px",
    width: "800px",
    margin: "auto",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up("md")]: {
      marginRight: "45px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px",
    },
  },
  headerStyle: {
    paddingBottom: "10px",
    paddingLeft: "50px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "15px",
    },

    ...theme.headerTransition,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={classes.sectionStyle}>
      <ScrollableAnchor id={"education"}>
        <Grid
          container
          direction="row"
          spacing={1}
          className={classes.headerStyle}
        >
          <Grid item>
            <SchoolIcon fontSize="small" />
          </Grid>
          <Grid item>
            <Typography variant="h2">Education</Typography>
          </Grid>
        </Grid>
      </ScrollableAnchor>
      <Grid
        container
        direction={matches ? "column" : "row"}
        className={classes.root}
      >
        <Grid item>
          <Tabs
            orientation={matches ? "horizontal" : "vertical"}
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="University" {...a11yProps(0)} />
            <Tab label="A-Level" {...a11yProps(1)} />
            <Tab label="GCSE" {...a11yProps(2)} />
          </Tabs>
        </Grid>
        <Grid item xs>
          <TabPanel value={value} index={0}>
            <TabsContentHolder {...uniData} columns />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TabsContentHolder {...aLevelData} columns />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TabsContentHolder {...gcseData} columns />
          </TabPanel>
        </Grid>
      </Grid>
    </section>
  );
}
