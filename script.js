//Hamburger navigation
let humburger = document.querySelector('.humburger');
let navMenu = document.querySelector('.nav-menu');
let icon = document.querySelector('i');
let body = document.querySelector('body');

humburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    body.classList.toggle('no-scroll');
    
    if(icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    }

    else{
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});


// Form Validation
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let fnameMsg = document.querySelector("#fnameMsg");
let lnameMsg = document.querySelector("#lnameMsg");

let email = document.querySelector("#email");
let emailMsg = document.querySelector('#emailMsg');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let phone = document.querySelector('#phone');
let phoneMsg = document.querySelector('#phoneMsg');
const phonePattern = /^[0-9]{10}$/;

let textarea = document.querySelector('#msg');
let textMsg = document.querySelector('#textMsg');
let charCount = 0;

let checkbox = document.querySelector('#privacy');
let checkboxMsg = document.querySelector('#privacyMsg');

//First Name Validation
function validateFirstName(){
    fnameValue = fname.value.trim();

    if(fnameValue === ""){
        fnameMsg.innerText = 'Required';
        fnameMsg.classList.add('showMsg');
        return false;
    }
    else{
        fname.value = fnameValue.replace(/[^a-zA-Z]/g, "" );
        fnameMsg.classList.remove('showMsg');
        return true;
    }
}

//Last Name Validation
function validateLastName(){
    lnameValue = lname.value.trim();

    if(lnameValue === ""){
        lnameMsg.innerText = 'Required';
        lnameMsg.classList.add('showMsg');
        return false;
    }
    else{
        lname.value = lnameValue.replace(/[^a-zA-Z]/g, "" );
        lnameMsg.classList.remove('showMsg');
        return true;
    }

}

//Email Validation
function validateEmail(){
    if(email.value === ""){
        emailMsg.innerText = 'Required';
        emailMsg.classList.add('showMsg');
        return false;
    }

    else if(!emailPattern.test(email.value)){
        emailMsg.innerText = "Invalid email address";
        emailMsg.classList.add('showMsg');
        return false;
    
    }
    else{
        emailMsg.innerText = "";
        emailMsg.classList.remove('showMsg');
        return true;
    }
}

//Phone Validation
function validatePhone(){
    phoneValue = phone.value.trim();

    if(phoneValue === ''){
        phoneMsg.innerText = 'Required';
        phoneMsg.classList.add('showMsg');
        return false;
        
    }

    else if(!phonePattern.test(phoneValue)){
        phoneMsg.innerText = "Invalid phone number";
        phoneMsg.classList.add('showMsg');
        return false;    
    }

    else{
        phoneMsg.innerText = "";
        phoneMsg.classList.remove('showMsg');
        return true;
        
    }
}

//Message Validation
function validateMessage() {
    let textareaValue = textarea.value.trim();
    
    if (textareaValue === "") {
        textMsg.innerText = "Required";
        textMsg.classList.add("showMsg"); // Keep the class
        textMsg.style.color = "red"; // Ensure it's red
        return false;
    } else {
        let charCount = textareaValue.length;
        textMsg.innerText = `Entered characters = ${charCount}`;
        textMsg.classList.add("showMsg"); // Keep all CSS styles
        textMsg.style.color = "green"; // Override only the color
        return true;
    }
}
//Checkbox Validation
function validateCheckbox(){
    if(!checkbox.checked){
        checkboxMsg.innerText = "Checkbox is unchecked (Required)";
        checkboxMsg.style.color = "green"
        checkboxMsg.classList.add('showMsg');
        return false;
    }

    else{
        checkboxMsg.innerText = "";
        checkboxMsg.classList.remove('showMsg');   
        return true;
    }
}

fname.addEventListener('input', validateFirstName);
lname.addEventListener('input', validateLastName);
email.addEventListener('input', validateEmail);
phone.addEventListener('input', validatePhone);
textarea.addEventListener('input', validateMessage);
checkbox.addEventListener('change', validateCheckbox);

let form = document.querySelector('#myform');
form.addEventListener('submit', (event) => {
   event.preventDefault();

   let isFnameValid = validateFirstName();
   let isLnameValid = validateLastName();
   let isEmailValid = validateEmail();
   let isPhoneValid = validatePhone();
   let isMessageValid = validateMessage();
   let isCheckboxValid = validateCheckbox();

   if(isFnameValid && isLnameValid && isEmailValid && isPhoneValid && isMessageValid && isCheckboxValid){
    alert("Form submitted successfully");
   }else{
    alert("Please fix errors before submitting");
   }


});
