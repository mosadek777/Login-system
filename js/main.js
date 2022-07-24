var usersInfo;

var userNameInput = document.getElementById(`userNameSignUp`)
var userEmailInput = document.getElementById(`signUpEmail`)
var userPassInput = document.getElementById(`signUpPassword`)

var confirmMsg = document.getElementById(`success`)
var signIn = document.getElementById(`goToLoginPage`)
var checkInputMsg = document.getElementById(`checkInput`)
var nameAlert = document.getElementById(`nameAlert`)
var passAlert = document.getElementById(`passAlert`)
var emailAlert = document.getElementById(`emailAlert`)
var checkExist = document.getElementById(`checkExist`)
var logInEmail = document.getElementById(`logInEmail`)
var logInPass = document.getElementById(`logInPass`)
var logInButton = document.getElementById(`logInButton`)
var checkInput = document.getElementById(`checkInput`)
var userNameSession = localStorage.getItem(`sessionUserName`)




if (localStorage.getItem(`users`) == null) {
    usersInfo = []
} else {
    usersInfo = JSON.parse(localStorage.getItem(`users`))
}


function signUp() {
    isExist()
    userInputValidation()
    if (isExist() == false && userInputValidation() == true) {
        var user = {
            name: userNameInput.value,
            email: userEmailInput.value,
            password: userPassInput.value
        }
        usersInfo.push(user)
        localStorage.setItem(`users`, JSON.stringify(usersInfo))
        confirmMsg.classList.replace(`d-none`, `d-block`)
        signIn.classList.replace(`d-none`, `d-block`)
    } else {
        checkInputMsg.classList.replace(`d-none`, `d-block`)
    }

}



function isExist() {
    for (var i = 0; i < usersInfo.length; i++) {
        if (usersInfo[i].name.toLowerCase() == userNameInput.value.toLowerCase() || usersInfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase()) {
            userNameInput.classList.replace(`is-invalid`, `is-valid`)
            userEmailInput.classList.replace(`is-invalid`, `is-valid`)
            checkExist.classList.replace(`d-none`, `d-block`)
            return true
        }

    }
    return false
}













function userInputValidation() {
    if (checkUserName() == true && checkUserPass() == true && checkUserEmail() == true) {
        return true
    }
    else {
        return false
    }
}






function checkUserName() {
    var nameRegex = /^[A-Za-z]{3,10}$/
    if (nameRegex.test(userNameInput.value) == true && userNameInput.value != "") {
        userNameInput.classList.add(`is-valid`)
        userNameInput.classList.remove(`is-invalid`)
        nameAlert.classList.replace(`d-block`, `d-none`)
        return true
    } else {
        userNameInput.classList.add(`is-invalid`)
        userNameInput.classList.remove(`is-valid`)
        nameAlert.classList.replace(`d-none`, `d-block`)
        return false
    }
}









function checkUserPass() {
    var passRegex = /^.{3,10}$/
    if (passRegex.test(userPassInput.value) == true && userPassInput.value != "") {
        userPassInput.classList.add(`is-valid`)
        userPassInput.classList.remove(`is-invalid`)
        passAlert.classList.replace(`d-block`, `d-none`)
        return true
    } else {
        userPassInput.classList.add(`is-invalid`)
        userPassInput.classList.remove(`is-valid`)
        passAlert.classList.replace(`d-none`, `d-block`)
        return false
    }
}









function checkUserEmail() {
    var emailRegex = /@[a-z]{5,10}(\.com)$/
    if (emailRegex.test(userEmailInput.value) == true && userEmailInput.value != "") {
        userEmailInput.classList.add(`is-valid`)
        userEmailInput.classList.remove(`is-invalid`)
        emailAlert.classList.replace(`d-block`, `d-none`)
        return true
    } else {
        userEmailInput.classList.add(`is-invalid`)
        userEmailInput.classList.remove(`is-valid`)
        emailAlert.classList.replace(`d-none`, `d-block`)
        return false
    }
}




function login() {
    if (logInEmail.value == "" || logInPass.value == "") {
        var fillMsg = document.getElementById(`fillMsg`)
        fillMsg.classList.replace(`d-none`, `d-block`)
        return false
    }
    for (var i = 0; i < usersInfo.length; i++) {
        if (usersInfo[i].email.toLowerCase() == logInEmail.value.toLowerCase() && usersInfo[i].password.toLowerCase() == logInPass.value.toLowerCase()) {
                localStorage.setItem(`sessionUserName`,usersInfo[i].name)
                logInButton.setAttribute(`href`,`home.html`)
        }
        else
        {
         
                checkInput.classList.replace(`d-none`, `d-block`)
            
          
        }
    
    }
   
}


function displayWelcomeUser() {
    document.getElementById(`massage`).innerHTML=`welcome   `   +  userNameSession
}




function logOut() {
    localStorage.removeItem(`sessionUserName`)
}