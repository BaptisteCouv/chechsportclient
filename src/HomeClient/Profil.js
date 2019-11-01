import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default function Profil() {
  return (
    <div>
      <Grid container justify="center" alignItems="center" style={{textAlign: "center"}}>
        <Grid container item xs={12} sm={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-helperText"
              label="Nom"
              defaultValue="Default Value"
              className=""
              helperText="Pour tou sles fils de timp"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-helperText"
              label="Prénom"
              defaultValue="Default Value"
              className=""
              helperText="je sais pas quoi mettre"
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
