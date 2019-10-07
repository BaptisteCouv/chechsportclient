import React from "react";
import "./App.css";
import Auth from "./AuthClient/Auth";
import LogIn from "./AuthClient/LogIn";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HomeClient from "./HomeClient/HomeClient";
import Match from "./HomeClient/Match";
import Profil from "./HomeClient/Profil";
import Equipe from "./HomeClient/Equipe";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div className="App">
      {/* On définie les liens et les components pour gérer la navigation entre les pages */}
          <Route path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/logIn" component={LogIn} />

          <Route path="/" component={Navbar} />
          <Route path="/homeClient" component={HomeClient} />
          <Route path="/match" component={Match} />
          <Route path="/monequipe" component={Equipe} />
          <Route path="/monprofil" component={Profil} />
      </div>
    </Router>
  );
}

// Home permet de créer un homepage pour pouvoir gérer la premier page ou vas arriver l'utilisateur

const Home = () => (
  <div>
    {/* <h1>Home page</h1> */}
  </div>
);

export default App;
