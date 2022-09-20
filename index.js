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
    },2000);
    console.log(error.classList)
    
}

const validateInput = ()=>{
    if (!nameInput.value || !email.value || !password.value){
       errorText = "Please Fill all the values!"
       showError(errorText);
       console.log(errorText);
    }
  
}

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    validateInput();
    
})

