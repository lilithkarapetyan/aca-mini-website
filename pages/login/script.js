function register() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const birthDate = document.getElementById("login-birth-date").value;
    const gender = document.querySelector("#login-gender input:checked").value;
    const isTermsAccepted = document.getElementById("login-accept-terms").checked;

    if(!isTermsAccepted) {
        return;
    }

    const userData = { username, password, birthDate, gender };

    console.log(userData);

    // fetch("https://myservice.com/users", {
    //     method: "POST",
    //     body: JSON.stringify(userData)
    // }).then(() => {

    // })
}
