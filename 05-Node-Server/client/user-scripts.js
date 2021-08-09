// User Signup

function userSignUp() {
    // console.log('userSignUp Function Called')
    let userEmail = document.getElementById('emailSignup').value;
    let userPass = document.getElementById('pwdSignup').value;
    let newUserData = { user: { email: userEmail, password: userPass } };
    console.log(`NEWUSERDATA ==> ${newUserData.user.userEmail} ${newUserData.password}`)
    console.log(newUserData);
    console.log(userPass);
    fetch('http://localhost:3000/user/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('sessionToken', token);
        tokenChecker()
    })
    .catch((err) => {
        console.log(err)
    })
}

//User Login

function userLogin() {
    let userEmail = document.getElementById('emailLogin').value;
    let userPass = document.getElementById('pwdLogin').value;
    console.log(userEmail, userPass);

    let userData = { user: { email: userEmail, password: userPass } };
    console.log(`USERDATA ==> ${userData.user.email} ${userData.user.password}`)
    fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)

    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
        tokenChecker()
    })
    .catch((err) => {
        console.log(err);
    })
}

//User Logout

function userLogout() {
    console.log('userLogout Function Called')
}

//Token Checker Function

function tokenChecker() {
    console.log('tokenChecker Function Called')
}

tokenChecker();