const verifyUser = () => {
  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;

  checkUserCreds(userName, password);
};

const checkUserCreds = (userName, password) => {
  const systemUsername = "Class";
  const systemPassword = "2024";

  if (userName === systemUsername && password === systemPassword) {
    document.getElementById("message").innerHTML = "Login Successful! 🤩";
  } else {
    document.getElementById("message").innerHTML =
      "Incorrect Username or Password. Please try again 🥴";
  }
};

switch (weatherSelected) {
  case "sunny":
    advise = "Where your sunglases";
}
