//selecting the inputs
const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const error = document.querySelector('.error')
const submit = document.getElementById('submit');


var errorText = "";



const showError = (err)=>{
    error.innerHTML = `${err}`;
    error.classList.add('show')
    setTimeout(()=>{
        error.innerHTML = "";
        error.classList.remove('show');
    },3000);
    //console.log(error.classList)
    
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    return (true)
  }
    errorText = "Please Enter a valid email!"
    return (false)
}

const validateInput = ()=>{
    if (!nameInput.value || !email.value || !password.value){
       errorText = "Please Fill all the values!"
       showError(errorText);
       console.log(errorText);
       return false
    }

    else if(!ValidateEmail()){
        showError(errorText);
        return false
    }

    else if(nameInput.value.length < 6){
        errorText = "Please Enter a name with more than 6 characters!"
        showError(errorText)
        return false

    }

    else if(password.value.length < 8){
        errorText = "Password must contain more than 8 characters!"
        showError(errorText);
        return false
    }


    return true;
  
}

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    validateInput();
    
})

