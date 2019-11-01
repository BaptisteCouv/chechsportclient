import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import "./Match.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {}
}));

export default function Match() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className="match-container">
      {/* <Grid container className="testtest" justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={6}> */}
      <Grid container className="testtest" justify="center" alignItems="center">
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={8}
          lg={6}
          className="card-match"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={3} sm={2}>
            <Typography
              variant="subtitle1"
              className="card-match-header"
              gutterBottom
            >
              20H
            </Typography>
          </Grid>
          <Grid item xs={6} sm={8}>
            <Typography
              variant="subtitle1"
              className="card-match-header"
              gutterBottom
            >
              11/22/2109
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Badge className="card-match-header" badgeContent={4} color="primary">
              <SupervisorAccountIcon />
            </Badge>
          </Grid>

          <div className="style-line-border"></div>

          <Grid item xs={4} sm={4}>
            <Typography variant="h6" gutterBottom>
              Equipe A du cul
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Typography variant="h4" gutterBottom>
              3
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Typography variant="h4" gutterBottom>
              3
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Typography variant="h6" gutterBottom>
              Equipe B du cul
            </Typography>
          </Grid>

          <div className="style-line-border"></div>

          <Grid item xs={2} sm={2} className="button-present">
            <Button variant="outlined">Présent</Button>
          </Grid>
          <Grid item xs={12} sm={11} className="card-match-bar">
            <AppBar position="static" color="default" >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Information" {...a11yProps(0)} />
                <Tab label="Joueur" {...a11yProps(1)} />
                <Tab label="Discussion" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                Inforamtion sur le match
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Liste des joueurs présent
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                Indisponible pour le moment
              </TabPanel>
            </SwipeableViews>
          </Grid>
        </Grid>
      </Grid>
      {/* </Grid>
      </Grid> */}
    </div>
  );
}
