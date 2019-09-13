var validationName;
var validationEmail;
var validationPhone;
var validationZip;

//display name functions
function nameValidation(){
    let displayNameInput =  document.getElementById("displayNameInput");
    let msg = document.getElementById("nameMsg");
    let patt = new RegExp("^[^0-9][a-zA-Z0-9]*$");
    let result = patt.test(displayNameInput.value);

    // if(displayNameInput.value == null){
    //     msg.style = "display: none";
    // }

    if(result == false && displayNameInput.value != ""){
        msg.style = "display: inline";
        msg.innerHTML = "upper or lower case letters and numbers, may not start with a number";
        validationName = false;
    }else{
        msg.style = "display: none";
        validationName = true;
    }
}

function updateName(){
    let displayNameInput = document.getElementById("displayNameInput");
    let displayName = document.getElementById("displayName");
    let msg = document.getElementById("nameMsg");

    if(displayNameInput.value != "" && displayNameInput.value != displayName.value){
        msg.style = "display: inline";
        msg.innerHTML = "The display name has been updated";
        displayName.innerText = displayNameInput.value;
    }else{
        msg.style = "display: none";
    }

}

function nameFunc(){
    nameValidation();
    if(validationName == true){
        let displayNameInput = document.getElementById("displayNameInput");
        updateName();
        displayNameInput.value = "";
    }
}



//email address functions
function emailValidation(){
    let emailAddressInput =  document.getElementById("emailAddressInput");
    let emailMsg = document.getElementById("emailMsg");
    let patt = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    let result = patt.test(emailAddressInput.value);


    if(result == false && emailAddressInput.value != ""){
        emailMsg.style = "display: inline";
        emailMsg.innerHTML = "Please enter valid email address";
        validationEmail = false;
    }else{
        emailMsg.style = "display: none";
        validationEmail = true;
    }
}

function updateEmail(){
    let emailAddressInput = document.getElementById("emailAddressInput");
    let emailAddress = document.getElementById("emailAddress");
    let emailMsg = document.getElementById("emailMsg");

    if(emailAddressInput.value != "" && emailAddressInput.value != emailAddress.value){
        emailMsg.style = "display: inline";
        emailMsg.innerHTML = "The email has been updated";
        emailAddress.innerText = emailAddressInput.value;
    }else{
        emailMsg.style = "display: none";
    }

}

function emailFunc(){
    // let emailAddressInput =  document.getElementById("emailAddressInput");
    // let emailMsg = document.getElementById("emailMsg");
    // let patt = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    // let result = patt.test(emailAddressInput.value);
    // console.log(result);
    emailValidation();
    if(validationEmail == true){
        let emailAddressInput =  document.getElementById("emailAddressInput");
        updateEmail();
        emailAddressInput.value = "";
    }
}


//phone functions
function phoneValidation(){
    let phoneNumberInput =  document.getElementById("phoneNumberInput");
    let phoneMsg = document.getElementById("phoneMsg");
    let patt = new RegExp("[0-9]{3}-[0-9]{3}-[0-9]{4}");
    let result = patt.test(phoneNumberInput.value);


    if(result == false && phoneNumberInput.value != ""){
        phoneMsg.style = "display: inline";
        phoneMsg.innerHTML = "Please enter valid phone number: xxx-xxx-xxxx";
        validationPhone = false;
    }else{
        phoneMsg.style = "display: none";
        validationPhone = true;
    }
}


function updatePhone(){
    let phoneNumberInput = document.getElementById("phoneNumberInput");
    let phoneNumber = document.getElementById("phoneNumber");
    let phoneMsg = document.getElementById("phoneMsg");

    if(phoneNumberInput.value != "" && phoneNumberInput.value != phoneNumber.value){
        phoneMsg.style = "display: inline";
        phoneMsg.innerHTML = "The phone number has been updated";
        phoneNumber.innerText = phoneNumberInput.value;
    }else{
        phoneMsg.style = "display: none";
    }
}


function phoneFunc(){
    // let emailAddressInput =  document.getElementById("emailAddressInput");
    // let emailMsg = document.getElementById("emailMsg");
    // let patt = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    // let result = patt.test(emailAddressInput.value);
    // console.log(result);
    phoneValidation();
    if(validationPhone == true){
        let phoneNumberInput =  document.getElementById("phoneNumberInput");
        updatePhone();
        phoneNumberInput.value = "";
    }
}



//zipcode functions
function zipValidation(){
    let zipInput =  document.getElementById("zipInput");
    let zipMsg = document.getElementById("zipMsg");
    let patt = new RegExp(/^\d{1,5}$/);
    let result = patt.test(zipInput.value);


    if(result == false && zipInput.value != ""){
        zipMsg.style = "display: inline";
        zipMsg.innerHTML = "should be 5 digits";
        validationZip = false;
    }else{
        zipMsg.style = "display: none";
        validationZip = true;
    }
}


function updateZip(){
    let zipInput =  document.getElementById("zipInput");
    let zip = document.getElementById("zip");
    let zipMsg = document.getElementById("zipMsg");

    if(zipInput.value != "" && zipInput.value != zip.value){
        zipMsg.style = "display: inline";
        zipMsg.innerHTML = "The zipcode has been updated";
        zip.innerText = zipInput.value;
    }else{
        zipMsg.style = "display: none";
    }
}


function zipFunc(){
    zipValidation();
    if(validationZip == true){
        let zipInput =  document.getElementById("zipInput");
        updateZip();
        zipInput.value = "";
    }
}


var validationPassword;
function renderPassword() {
    let password = document.getElementById("passwordInput");
    let ast = "*";
    let renderedPassword = ast.repeat(password.placeholder.length);
    password.placeholder = renderedPassword;
}

function passwordValidation(){
    let password = document.getElementById("passwordInput");
    let conFrmMsg = document.getElementById("conFrmMsg");
    let conFrmInput = document.getElementById("conFrmInput");

    if(password.value != "" && conFrmInput.value != ""){
        if(password.value != conFrmInput.value){
            conFrmMsg.style = "display: inline";
            conFrmMsg.innerHTML = "Password do not match";
        }else{
            conFrmMsg.style = "display: inline";
            conFrmMsg.innerHTML = "Password updated";
            let passwordSubs = password.value;
            password.value = "";
            conFrmInput.value = "";
            let ast = "*";
            let renderedPassword = ast.repeat(passwordSubs.length);
            password.placeholder = renderedPassword;
        }
    }

}
