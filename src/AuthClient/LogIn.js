import React, { useState } from "react";
import "./Auth.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { logIn } from "../services/FetchBackend";
import { withRouter, Link } from "react-router-dom";

const LogIn = function({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="background-image-logIn">
      <Grid container>
        <Grid item xs={12} sm={1} className="test1"></Grid>

        <Grid item xs={12} sm={3} className="form-inscription">
          <div className="container-form-connexion">
            <h1>CONNEXION</h1>
            <form
              method="post"
              onSubmit={event => logIn(event, email, password, setErrorMessage, history)}
            >
              <TextField
                id="outlined-mail"
                label="Mail"
                type="email"
                className="input-inscription"
                margin="normal"
                variant="outlined"
                name="_username"
                required
                onChange={event => setEmail(event.target.value)}
              />

              <TextField
                id="outlined-password"
                label="Mot de passe"
                type="password"
                className="input-inscription"
                margin="normal"
                variant="outlined"
                name="_password"
                required
                onChange={event => setPassword(event.target.value)}
              />
              <div style={{color:'red', fontSize:'15px'}}>{errorMessage}</div>

              <div className="centrer button-insc">
                <Button
                  variant="contained"
                  color="primary"
                  className="inscription-button centrer"
                  type="submit"
                >
                  CONNEXION
                </Button>
              </div>
            </form>
            <p className="centrer text-area">
              Si tu n'as pas de compte clique ici !
            </p>

            <div className="centrer">
              <Link to="./Auth" style={{ textDecoration: "none" }}>
                <Button color="primary" className="connection-button">
                  inscription
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(LogIn)
