const user = {
    
}

const logInp = document.querySelector("#login")
const passInp = document.querySelector("#pass")
const authBtn = document.querySelector(".auth__btn")
const logLabel = document.querySelector(".auth__login")
const passLabel = document.querySelector(".auth__pass")

let login = ""
let password = ""

logInp.addEventListener("input", (e) => {
    login = e.target.value
    logInp.style.border = "2px solid #000"
})

passInp.addEventListener("input", (e) => {
    password = e.target.value
    passInp.style.border = "2px solid #000"
})

authBtn.addEventListener("click", (e) => {
    e.preventDefault()
   
    
    if (password !== "" && login !== "") {
        if(password.length > 5) {
            user.login = login
            user.password = password
        
            console.log(user);
        } else {
            passInp.style.border = "2px solid red"
            passInp.placeholder = "Too short password"
            passInp.value = ""
        }
    } else {
        if (password.length < 6) {
            passInp.style.border = "2px solid red"
            passInp.placeholder = "Too short password"
            passInp.value = ""
        }
        if (password === "") {
            passInp.style.border = "2px solid red"
            passInp.placeholder = "Please enter your password"
        }
      
        if (login === "") {
            logInp.style.border = "2px solid red"
            logInp.placeholder = "Please enter your login"
        }
    }
   
})