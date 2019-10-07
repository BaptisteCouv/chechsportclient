import React, { useState } from "react";
import "./Auth.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

async function logIn(event, email, password) {
  // l'envoie du formumaire ne vas pas s'envoyer grace au preventdefault
  event.preventDefault();

  // 2 solutions pour l'authentification :
  // - Json Web Token ( standard API )
  // - Custom ( vérification simple de username/password et stockage en local storage de l'identification )
  let response = await fetch("http://127.0.0.1:8000/api/login_check", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      username: email,
      password: password
    })
  });

  try {
    let jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (error) {
    console.log(error, response);
  }

  //  localStorage.setItem("token", jsonResponse.token)
}

export default function() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="background-image-logIn">
      <Grid container>
        <Grid item xs={12} sm={1} className="test1"></Grid>

        <Grid item xs={12} sm={3} className="form-inscription">
          <div className="container-form-connexion">
            <h1>CONNEXION</h1>
            <form
              action="http://127.0.0.1:8000/connection"
              method="post"
              onSubmit={event => logIn(event, email, password)}
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
