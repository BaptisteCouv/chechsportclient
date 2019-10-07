import React, { useEffect, useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import DehazeIcon from "@material-ui/icons/Dehaze";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import GroupIcon from "@material-ui/icons/Group";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PersonIcon from "@material-ui/icons/Person";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  root: {
    flexGrow: 1,
    backgroundColor: "white"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Navbar() {
  const classes = useStyles();

  const [player, setPlayer] = useState("");

  useEffect(() => {

  }, []);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to="./homeclient" style={{ textDecoration: "none" }}>
          <ListItem button key={"Accueil"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Accueil"} />
          </ListItem>
        </Link>

        <Link to="./match" style={{ textDecoration: "none" }}>
          <ListItem button key={"Matchs"}>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary={"Matchs"} />
          </ListItem>
        </Link>

        <Link to="./monequipe" style={{ textDecoration: "none" }}>
          <ListItem button key={"Mon Equipe"}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary={"Mon Equipe"} />
          </ListItem>
        </Link>

        <Link to="./" style={{ textDecoration: "none" }}>
          <ListItem button key={"Coach"}>
            <ListItemIcon>
              <MoreHorizIcon />
            </ListItemIcon>
            <ListItemText primary={"Coach"} />
          </ListItem>
        </Link>
      </List>

      <Divider />

      <List>
        <Link to="./monprofil" style={{ textDecoration: "none" }}>
          <ListItem button key={"Profil"}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="" />
          </ListItem>
        </Link>

        <ListItem button key={"Deconnexion"}>
          <ListItemIcon>
            <RemoveCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary={"Deconnexion"} />
        </ListItem>
      </List>
    </div>
  );

  const fullList = side => (
    <div
      className="navbar-form"
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Accueil", "Matchs", "Mon Equipe", "Coach"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Profil", "Deconnexion"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="navbar-form">
          <IconButton onClick={toggleDrawer("left", true)}>
            <DehazeIcon />
          </IconButton>
          <SwipeableDrawer
            open={state.left}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {sideList("left")}
          </SwipeableDrawer>

          <Typography variant="h6" className={classes.title}>
            <p className="navbar-title">CHECKSPORT</p>
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="header-img-edit"></div>
    </div>
  );
}
