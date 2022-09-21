//selecting the inputs
const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const error = document.querySelector('.error')
const submit = document.getElementById('submit');
const maleInput = document.getElementById('male');
const femaleInput = document.getElementById('female');
const city = document.getElementById('city');


var errorText = "";

let users = new Array();
const getUsersFromLocalStorage = ()=>{
    users = JSON.parse(localStorage.getItem('users')) || [];
}

getUsersFromLocalStorage();

``
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
   if(validateInput()){
      addUserToLocalStorage()
      //window.location = '/users.html'
   }
    
})



const addUserToLocalStorage  = ()=>{
    const user = {
        name : nameInput.value,
        email : email.value,
        password : password.value,
        gender : maleInput.checked ? maleInput.value : femaleInput.value,
        city : city.options[city.selectedIndex].value
        
    }

    

    users.push(user);
    //  console.log(city.options[city.selectedIndex].value);
    

    if(users){
        localStorage.setItem('users',JSON.stringify(users));
    }
}


//getting the users from the local storage


console.log(users);
    

