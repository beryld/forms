const form = document.getElementById('firstname');
const formAge = document.getElementById('age');
const formPassword = document.getElementById('pwd')
const confPassword = document.getElementById('pwd-confirm')
const darkModus = document.getElementById('toggle-darkmode')

const registerKeys =(event) => {
    event.preventDefault();
    
    const newKeys = event.target.value;
    console.log(newKeys)
    const saving  = document.querySelector('#display-firstname');
    saving.textContent = newKeys
    
}

const confirmAge = (event) => {
    event.preventDefault();
    const showUp = document.getElementById('a-hard-truth');

    const currentAge = event.target.value;
    console.log(currentAge)
    if (currentAge>=18){
        showUp.style.visibility='visible'
    }
    else
     if (currentAge<18){
        showUp.style.visibility='hidden'
}
}

const pwdLenghtCheck = (event) => {
    event.preventDefault();
    const currentPwd = event.target.value
    if(currentPwd.length<3){
        formPassword.style.color="red"
    }
    else if( currentPwd.length<5){
        formPassword.style.color="orange"
    }
    else if (currentPwd.length>=6){
        formPassword.style.color="green"
    }
    
}


const pwdChecking = (event) => {
    event.preventDefault();
    console.log(formPassword.value)    
    const currentCheck = event.target.value;

    if(currentCheck.length >=6){
    if (formPassword.value === currentCheck){
        confPassword.style.color="green"}
        else if (formPassword.value != currentCheck){
            confPassword.style.color="red"
            window.alert("Passwords do not match")

        }
    }
}

const darkSwitch = (event) => {
    document.body.style.backgroundColor='black'
    document.body.style.color='white'
}


form.addEventListener('input',registerKeys);
formAge.addEventListener('input', confirmAge);
formPassword.addEventListener('input', pwdLenghtCheck)
confPassword.addEventListener('input', pwdChecking)
darkModus.addEventListener('change', darkSwitch)