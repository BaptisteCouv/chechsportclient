// route fetch LogIn
export async function logIn(event, email, password, setErrorMessage, history) {
  // l'envoie du formumaire ne vas pas s'envoyer grace au preventdefault
  event.preventDefault();

  // 2 solutions pour l'authentification :
  // - Json Web Token ( standard API )
  // - Custom ( vérification simple de username/password et stockage en local storage de l'identification )
  let response = await fetch("http://checksport.loc/api/login_check", {
    headers: {
      // ces headers généralement utilisés lors d'une communication
      // avec fetch() et une API distante font bugguer
      // le CORS de symfony/nginx
      // Ne PAS les inclure
      //Accept: "application/json",
      //"Content-Type": "application/json"
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
    if (jsonResponse.code) {
      setErrorMessage(jsonResponse.message);
    } else {
      localStorage.setItem("token", jsonResponse.token);
      history.push("/HomeClient");
    }
  } catch (error) {
    console.log(error, response);
  }

  //  localStorage.setItem("token", jsonResponse.token)
}

//route fetch équipes
export async function initializeTeams(setErrorMessage, setTeams) {
  let response = await fetch("http://checksport.loc/api/teams", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    },
    method: "GET"
  });

  try {
    let jsonResponse = await response.json();
    console.log("aaaaaaaaaaaaaaaa");
    if (jsonResponse.code) {
      setErrorMessage(jsonResponse.message);
    } else {
      console.log("bbbbbbbbbbbbbbbbbbb");
      setTeams(jsonResponse);
    }
  } catch (error) {
    console.log(error, response);
  }
}

//route fetch match
export async function createMatch(
  event,
  setErrorMessage,
  matchCreationFormState,
  history
) {
  event.preventDefault();
  let response = await fetch("http://checksport.loc/api/match", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    },
    method: "POST",
    body: JSON.stringify({
      ...matchCreationFormState,
      //monchamp_hidden: "valeur par défaut pour tout match créé"
    })
  });

  try {
    let jsonResponse = await response.json();
    if (jsonResponse.code) {
      setErrorMessage(jsonResponse.message);
    } else {
      // Afficher un messagee de succès
      // Recharger d'une facon ou d'une autre la liste des matchs
      history.push("/Match");
    }
  } catch (error) {
    console.log(error, response);
  }
}


