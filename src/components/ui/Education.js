import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabsContentHolder from "./TabsContentHolder";
import unilogo from "../../assets/unilogo.svg";
import qelogo from "../../assets/qe_logo.svg";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SchoolIcon from "@material-ui/icons/School";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      item
      style={{ paddingLeft: "30px" }}
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
    },
    paddingTop: "150px",
    paddingBottom: "150px",
    width: "800px",
    margin: "auto",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
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
      <Grid
        container
        direction={matches ? "column" : "row"}
        spacing={5}
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
            <TabsContentHolder
              logo={unilogo}
              title="University of Warwick"
              subtitle1="BEng Computer Systems Engineering - First Class Honors"
              subtitle2="2016 - 2019"
              resultsName="Key Modules"
              results={{
                Algorithms: "90%",
                "Web Development": "85%",
                Mathematics: "100%",
                "Computer Science": "92%",
              }}
              columns
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TabsContentHolder
              logo={qelogo}
              title="Queen Elizabeth's School for Boys"
              subtitle1="A2 Results: A* A B"
              subtitle2="2009 - 2016"
              resultsName="Subjects"
              results={{
                Maths: "A*",
                "Further Maths (AS)": "A",
                Sociology: "A",
                Physics: "B",
              }}
              columns
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TabsContentHolder
              logo={qelogo}
              title="Queen Elizabeth's School for Boys"
              subtitle1="GCSE Results: 6 A*'s | 3 A's | 2 B's"
              subtitle2="2009 - 2016"
              columns
            />
          </TabPanel>
        </Grid>
      </Grid>
    </section>
  );
}
