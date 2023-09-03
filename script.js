let users = []; //Empty variable where the data from the API will be displayed

function validate() {
    let username=document.getElementById("username").value; //Picks up the username from the HTML form
    let password=document.getElementById("password").value; //Picks up the password
    let authenticated = false;
    for (let user of users) { //Loops through operators to see if it's the right username & password combination 
      if (user.login.username === username && user.login.password === password) {
      authenticated = true;
      break;
      }
    }
  if (authenticated) { //Using an if-statement to log the user in or to show the user an error message
    location.href = "courses.html";
  } else {
    alert("Your username or password is not correct! Please try again")
  }
  }

  const uri = "https://webbred2.utb.hb.se/~fewe/api/api.php?data=students"; 
  fetch(uri) //Fetches the data from the API
  .then(response => response.json())
  .then(data => users = data);
