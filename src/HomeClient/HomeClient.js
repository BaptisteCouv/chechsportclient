import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import "./HomeClient.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
//import ftech
import { createMatch, initializeTeams } from "../services/FetchBackend";

const useStyles = makeStyles(theme => ({
  section: {
    flexGrow: 1
  },
  root: {
    padding: theme.spacing(3, 2),
    margin: 20
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  }
}));

console.log(localStorage.getItem("token"));

const getNowDate = () => {
  const d = new Date();

  return (
    d.getFullYear() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getDate() +
    " " +
    d
      .getHours()
      .toString()
      .padStart(2, "0") +
    ":" +
    d
      .getMinutes()
      .toString()
      .padStart(2, "0") +
    ":" +
    d
      .getSeconds()
      .toString()
      .padStart(2, "0")
  );
};

let isTeamInitialized = false;

const HomeClient = function ({ history }) {
  // storage of hooks form database, of table "Match"
  const [teams, setTeams] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [teamSelectLabelWidth, setTeamSelectLabelWidth] = useState(0);

  const classes = useStyles();
  const [open, setOpen] = React.useState(0);

  const [matchCreationFormState, setMatchCreationFormState] = React.useState({
    host_team: "",
    guest_team: "",
    postponed: "",
    cancelage: "",
    information: "",
    datage: ""
  });

  // Fonction qui prend en paramètre name et qui retourne une nouvelle fonction qui prend en paramètre event
  // pour remplir le champ name, dans le state du formulaire de création de match
  const handleMatchCreationFieldState = name => event => {
    setMatchCreationFormState({
      ...matchCreationFormState,
      [name]: event.target.value
    });
  };

  const handleTeamWinLooseCheckboxChange = name => event => {
    setMatchCreationFormState({
      ...matchCreationFormState,
      [name]: event.target.checked
    });
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  useEffect(_ => {
    initializeTeams(setErrorMessage, setTeams);
  }, []);

  return (
    <div className="container-home-client">
      {/* DEBUT MODAL */}

      <Tooltip
        title="Ajouter un match"
        aria-label="add"
        onClick={handleModalOpen}
      >
        <Fab color="primary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Grid item xs={12} sm={3} className="form-creation-team">
            <form
              className="modal-home-client"
              method="post"
              onSubmit={event =>
                createMatch(
                  event,
                  setErrorMessage,
                  matchCreationFormState,
                  history
                )
              }
            >
              <h2>Creation d'un match</h2>
              <FormControl
                variant="outlined"
                className="input-add-team"
                style={{ width: "200px" }}
              >
                <InputLabel htmlFor="outlined-age-simple">
                  Club Invité
                </InputLabel>
                <Select
                  onChange={handleMatchCreationFieldState("guest_team")}
                  labelWidth={teamSelectLabelWidth}
                  value={matchCreationFormState.guest_team}
                  inputProps={{
                    name: "guest_team",
                    id: "outlined-age-simple"
                  }}
                >
                  {teams.map(function(team) {
                    return <MenuItem value={team.id}>{team.teamName}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <FormControl
                variant="outlined"
                className="input-add-team"
                style={{ width: "200px" }}
              >
                <InputLabel htmlFor="outlined-age-simple">
                  Club Local
                </InputLabel>
                <Select
                  onChange={handleMatchCreationFieldState("host_team")}
                  labelWidth={teamSelectLabelWidth}
                  value={matchCreationFormState.host_team}
                  inputProps={{
                    name: "host_team",
                    id: "outlined-age-simple"
                  }}
                >
                  {teams.map(function(team) {
                    return <MenuItem value={team.id}>{team.teamName}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <div>2019-10-31 23:59:00</div>
              <TextField
                id="home-team-logo"
                label="Date"
                type="text"
                className="input-add-city"
                margin="normal"
                variant="outlined"
                // required
                //event.target.value-> recupère la valuer de l'élément sur lequel on clic !
                onChange={handleMatchCreationFieldState("datage")}
              />
              <TextField
                id="home-team-logo"
                label="Reporté"
                type="text"
                className="input-add-city"
                margin="normal"
                variant="outlined"
                required
                //event.target.value-> recupère la valuer de l'élément sur lequel on clic !
                onChange={handleMatchCreationFieldState("postponed")}
              />
              <TextField
                id="home-team-logo"
                label="Annulé"
                type="text"
                className="input-add-city"
                margin="normal"
                variant="outlined"
                required
                //event.target.value-> recupère la valuer de l'élément sur lequel on clic !
                onChange={handleMatchCreationFieldState("cancelage")}
              />
              <TextField
                id="home-team-logo"
                label="Information"
                type="text"
                className="input-add-city"
                margin="normal"
                variant="outlined"
                required
                //event.target.value-> recupère la valuer de l'élément sur lequel on clic !
                onChange={handleMatchCreationFieldState("information")}
              />
              {/* <div style={{color:'red', fontSize:'15px'}}>{errorMessage}</div> */}
              <div style={{ color: "red", fontSize: "15px" }}>
                {errorMessage}
              </div>
              <div className="centrer button-insc">
                <Button
                  variant="contained"
                  color="primary"
                  className="inscription-button centrer"
                  type="submit"
                >
                  Ajouter un Match
                </Button>
              </div>
            </form>
          </Grid>
        </Fade>
      </Modal>
      {/* FIN MODALE */}

      <Link to="./match" style={{ textDecoration: "none" }}>
        <Grid
          container
          className="testtest"
          justify="center"
          alignItems="center"
        >
          <Grid
            container
            item
            xs={12}
            sm={5}
            className="card-match"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={3} sm={2}>
              <Typography
                variant="subtitle1"
                className="card-match-style-hour"
                gutterBottom
              >
                20H
              </Typography>
            </Grid>
            <Grid item xs={6} sm={8}>
              <Typography
                variant="subtitle1"
                className="card-match-style-date"
                gutterBottom
              >
                11/22/2109
              </Typography>
            </Grid>
            <Grid item xs={3} sm={2}>
              <Badge className="" badgeContent={4} color="primary">
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

            <Grid item xs={2} sm={2} className="button-present">
              <Button variant="outlined">Présent</Button>
            </Grid>
          </Grid>
        </Grid>
      </Link>
    </div>
  );
};

export default withRouter(HomeClient);
