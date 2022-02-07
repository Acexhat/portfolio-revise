import React from "react";
import AOS from "aos";
import "./Org.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
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
    flexGrow: 1,
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "flex-start",
    color: "white",
    paddingLeft: "3rem",
  },
  indicator: {
    backgroundColor: "aquamarine",
    position: "absolute",
    left: 0,
  },
  Tab: {
    textTransform: "none",
    borderLeft: "0.16rem solid grey",
    "&:focus": {
      backgroundColor: "#112240",
      color: "aquamarine",
    },
    "&:hover": {
      color: "aquamarine",
    },
  },
  panel: {
    height: "25rem",
    width: "40rem",
  },
  desc: {
    color: "#8892b0",
    fontSize: "1rem",
  },
}));

export default function Org() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div data-aos="fade">
      <div id="workMain" className="orgCont">
        <h1 className="works AboutMeHeading WorkHeading">Where I've Worked</h1>
        <div className={classes.root}>
          <Tabs
            classes={{ indicator: classes.indicator }}
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab
              disableRipple
              className={classes.Tab}
              label="StartUp Inc."
              {...a11yProps(0)}
            />
            <Tab
              disableRipple
              className={classes.Tab}
              label="HighRadius Corp."
              {...a11yProps(1)}
            />
            <Tab
              disableRipple
              className={classes.Tab}
              label="HighRadius Corp."
              {...a11yProps(2)}
            />
          </Tabs>
          <TabPanel className={classes.panel} value={value} index={0}>
            <div>
              <Typography variant="h5" color="initial">
                Front End Intern
                <span className="greenText"> @ StartUp Inc.</span>
              </Typography>
              <Typography variant="body2" color="initial">
                June - July 2020
              </Typography>
              <ul className="skillUl">
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Worked with a team of aspiring student interns
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Created many website layouts for clients eg. Coffe shop and
                    Yoga Instructor
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    It was my first internship here I learnt how to use HTML and
                    CSS in real world.
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    I was awarded with a letter of recommendation for good
                    performance in intern period
                  </Typography>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel className={classes.panel} value={value} index={1}>
            <div>
              <Typography variant="h5" color="initial">
                Software Developer Intern
                <span className="greenText"> @HighRadius</span>
              </Typography>
              <Typography variant="body2" color="initial">
                January - March 2021
              </Typography>
              <ul className="skillUl">
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Worked with a very supportive team on Machine Learning, Data
                    Science, Java and React.
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Created a machine learning model for internal working of the
                    company.
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Created backend with java and J2EE for using the predictions
                    in the real world.
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Created front end of the application with ReactJs and
                    Material UI and connected the ML model with flask and java
                    backend and made it fully functional app.
                  </Typography>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel className={classes.panel} value={value} index={2}>
            <div>
              <Typography variant="h5" color="initial">
                Full Stack Developer
                <span className="greenText"> @HighRadius</span>
              </Typography>
              <Typography variant="body2" color="initial">
                April 2021 - present
              </Typography>
              <ul className="skillUl">
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Working with a team of experienced developers and learning
                    everyday
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Creating app with front end built by ExtJs and backend by
                    Java
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Learning new things everyday and getting fit in corporate
                    world
                  </Typography>
                </li>
              </ul>
            </div>
          </TabPanel>
        </div>
      </div>
      <div id="workMain" className="orgCont">
        <h1 className="works AboutMeHeading WorkHeading">Where I've Worked</h1>
        <div className={classes.root}>
          <Tabs
            classes={{ indicator: classes.indicator }}
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab
              disableRipple
              className={classes.Tab}
              label="StartUp Inc."
              {...a11yProps(0)}
            />
            <Tab
              disableRipple
              className={classes.Tab}
              label="HighRadius Corp."
              {...a11yProps(1)}
            />
            <Tab
              disableRipple
              className={classes.Tab}
              label="HighRadius Corp."
              {...a11yProps(2)}
            />
          </Tabs>
          <TabPanel className={classes.panel} value={value} index={0}>
            <div>
              <Typography variant="h5" color="initial">
                Front End Intern
                <span className="greenText"> @ StartUp Inc.</span>
              </Typography>
              <Typography variant="body2" color="initial">
                June - July 2020
              </Typography>
              <ul className="skillUl">
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Worked with a team of aspiring student interns
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Created many website layouts for clients eg. Coffe shop and
                    Yoga Instructor
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    It was my first internship here I learnt how to use HTML and
                    CSS in real world.
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    I was awarded with a letter of recommendation for good
                    performance in intern period
                  </Typography>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel className={classes.panel} value={value} index={1}>
            <div>
              <Typography variant="h5" color="initial">
                Software Developer Intern
                <span className="greenText"> @HighRadius</span>
              </Typography>
              <Typography variant="body2" color="initial">
                January - March 2021
              </Typography>
              <ul className="skillUl">
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Worked with a very supportive team on Machine Learning, Data
                    Science, Java and React.
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Created a machine learning model for internal working of the
                    company.
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Created backend with java and J2EE for using the predictions
                    in the real world.
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Created front end of the application with ReactJs and
                    Material UI and connected the ML model with flask and java
                    backend and made it fully functional app.
                  </Typography>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel className={classes.panel} value={value} index={2}>
            <div>
              <Typography variant="h5" color="initial">
                Full Stack Developer
                <span className="greenText"> @HighRadius</span>
              </Typography>
              <Typography variant="body2" color="initial">
                April 2021 - present
              </Typography>
              <ul className="skillUl">
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Working with a team of experienced developers and learning
                    everyday
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Creating app with front end built by ExtJs and backend by
                    Java
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Learning new things everyday and getting fit in corporate
                    world
                  </Typography>
                </li>
              </ul>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
