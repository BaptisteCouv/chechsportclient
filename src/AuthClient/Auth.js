import React, { useState } from "react";
import "./Auth.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";


export default function Auth() {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  let jesaispasenorelenom = {
    name: name,
    firstName: firstName,
    mail: mail,
    password: password
  };

  // async function auth(e) {
  //   console.log(e);
  //     e.preventDefault();

  //     /* let test = new FormData()
async function traitementConnection(e) {
  e.preventDefault();
  // 2 solutions pour l'authentification :
  // - Json Web Token ( standard API )
  // - Custom ( vérification simple de username/password et stockage en local storage de l'identification )
  let response = await fetch("http://127.0.0.1:8000/api/register", {
    mode: "no-cors",
    method: "POST",
    body: "jesaispasenorelenom"
  });

  let result = await response.text();
  console.log(result);
}

// 

return (
  <div className="background-image">
    <Grid className="spacing-container" container spacing={12}>
      <Grid className="text-area-title" id="txt-one" item xs={12}>
        <p>BIENVENUE SUR</p>
      </Grid>
      <Grid className="text-area-title" id="txt-two" item xs={12}>
        <p>CHECK'SPORT</p>
      </Grid>
      <Grid className="text-area-title" id="txt-tree" item xs={12}>
        <p>LE MEILLEUR SITE DE GESTION D'EQUIPE</p>
      </Grid>
    </Grid>

    <Grid
      className="grid-for-form"
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={12}
    >
      <Grid item xs={12} sm={8} className="test1"></Grid>

      {/* Formulaire d'inscription */}
      <Grid item xs={12} sm={3} className="form-inscription">
        <h1>INSCRIPTION</h1>
        <form
          onSubmit={e => {
            traitementConnection(e);
          }}
        >
          <TextField
            id="outlined-name"
            label="Nom"
            type="search"
            className="input-inscription"
            margin="normal"
            variant="outlined"
            name="name"
            onChange={e => {
              setName(e.target.value);
            }}
            value={name}
            required
          />
          <TextField
            id="outlined-first-name"
            label="Prénom"
            type="search"
            className="input-inscription"
            margin="normal"
            variant="outlined"
            name="firstname"
            onChange={e => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            required
          />
          <TextField
            id="outlined-mail"
            label="Mail"
            type="mail"
            className="input-inscription"
            margin="normal"
            variant="outlined"
            name="email"
            onChange={e => {
              setMail(e.target.value);
            }}
            value={mail}
            required
          />
          <TextField
            id="outlined-password"
            label="Mot de passe"
            type="password"
            className="input-inscription"
            margin="normal"
            variant="outlined"
            name="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />

          <div className="centrer button-insc">
            <Button
              variant="contained"
              color="primary"
              className="inscription-button centrer"
              type="submit"
            >
              INSCRIPTION
            </Button>
          </div>
        </form>

        <p className="centrer text-area">
          Si tu as déjà un compte clique ici !
        </p>

        <div className="centrer">
          <Link to="./LogIn" style={{ textDecoration: "none" }}>
            <Button color="primary" className="connection-button">
              connexion
            </Button>
          </Link>
        </div>
      </Grid>

      <Grid item xs={12} sm={1} className="test2"></Grid>
    </Grid>
  </div>
);
}
