import React from "react";
import "./HomeClient.css";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Badge from '@material-ui/core/Badge';
import PeopleIcon from '@material-ui/icons/People';


const useStyles = makeStyles(theme => ({
  section: {
    flexGrow: 1
  },
  root: {
    padding: theme.spacing(3, 2),
    margin: 20
  }
}));

export default function HomeClient() {
  const classes = useStyles();
  
  return (
    <div className="container-home-client">
      <Container maxWidth="sm">
        <Paper className={classes.root}>
          <Grid container className="grid-card-section">
            <Grid item xs={4}>
              <Typography >
                Heure
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className="title-card-match">
                Date
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className="title-card-match">
                <Badge
                  badgeContent={4}
                  color="primary"
                >
                  <PeopleIcon />
                </Badge>
              </Typography>
            </Grid>
          </Grid>

          <Grid container className="grid-card-section">
            <Grid item xs={5}>
              <Typography className="title-card-match">
                Equiep A
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography className="title-card-match">
                |
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography className="title-card-match">
                Equipe B
              </Typography>
            </Grid>
          </Grid>

          <Grid container className="grid-card-section-button">
            <Grid item xs={9}></Grid>
            <Grid item xs={2}>
              <Button color="primary">PRESENT</Button>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
