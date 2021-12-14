/*added this form validation. Did not use the template, couldnt get to "where find my page"*/

import{submitForm, clearVisitor} from "./controller.js";
import{Visitor, visitors} from "./model.js"

let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let address = document.getElementById("address");
let state = document.getElementById("state");
let zip = document.getElementById("zip");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

let addressErr = true;
let stateErr = true;
let zipErr = true;
let fNameErr = true;
let lNameErr = true;
let emailErr = true;
let phoneErr = true;

let idCount = 0;

function validateInput(){
    if(fName.value.trim() === ""){
        fNameErr = true;
        onError(fName, "Please enter First Name");
    }
    else{
        fNameErr = false;
        onSuccess(fName);
    }
    if(lName.value.trim() === ""){
        lNameErr = true;
        onError(lName, "Please enter Last Name");
    }
    else{
        lNameErr = false;
        onSuccess(lName);
    }
    if(email.value.trim() === ""){
        emailErr = true;
        onError(email, "Email cannot be empty")
    }
    else{
        if (!isValidEmail(email.value.trim())) {
            emailErr = true;
            onError(email, "Email is not valid");            
        }
        else{
            emailErr = false;
            onSuccess(email);
        }
    }
    if(address.value.trim() === ""){
        addressErr = true;
        onError(address, "Please enter Address");
    }
    else{
        addressErr = false;
        onSuccess(address);
    }

    if(zip.value.trim() === ""){
        zipErr = true;
        onError(zip, "Please enter Zip Code");
    }
    else{
        if(isValidZip(zip.value.trim()) == false){
            console.log(isValidZip(zip.value.trim()));
            zipErr = true;
            onError(zip, "Invalid Zip Code");
        }
        else{
            zipErr = false;
            onSuccess(zip);
        }
        
    }
    if(phone.value.trim() === ""){
        phoneErr = true;
        onError(phone, "Please enter phone number");
    }
    else{
        if (!isValidPhone(phone.value.trim())) {
            phoneErr = true;
            onError(phone, "Phone Number is not valid");            
        }
        else{
            phoneErr = false;
            onSuccess(phone);
        }
    }
    if(state.value.trim() === ""){
        stateErr = true;
        onError(state, "Please enter two letter state code");
    }
    else{
        if (!isValidState(state.value.trim())) {
            stateErr = true;
            onError(state, "State is not valid");            
        }
        else{
            stateErr = false;
            onSuccess(state);
        }
    }  
    if((lNameErr || fNameErr || emailErr || stateErr || zipErr || phoneErr || addressErr) == false){
        alert("Thank you for your submission!");
        let visitor = new Visitor(idCount++, fName.value,lName.value,address.value,state.value,zip.value,phone.value,email.value);
       // let visitor = new Visitor(idCount++, fName.value,lName.value,address.value,state.value,zip.value,phone.value,email.value,addingButton(idCount));
        console.log("after init " + visitor)
        onAfter();
        submitForm(visitor);
        clearVisitor(visitor);
        
        }      
}

document.getElementById("formSubmit").addEventListener("click",(visitor)=>{
    console.log("logged");
    visitor.preventDefault();
    validateInput(visitor);
    
});

function onSuccess(input){
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    messageEle.innerText = "";
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input, message){
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.remove("success");
    parent.classList.add("error");
}
function onAfter(){/*removing green and red accepting box}*/
    let parent = fName.parentElement;
    parent.classList.remove("error");
    parent.classList.remove("success");
    parent.classList.add("normal");
    parent = lName.parentElement;
    parent.classList.remove("error");
    parent.classList.remove("success");
    parent.classList.add("normal");
    parent = address.parentElement;
    parent.classList.remove("error");
    parent.classList.remove("success");
    parent.classList.add("normal");
    parent = state.parentElement;
    parent.classList.remove("error");
    parent.classList.remove("success");
    parent.classList.add("normal");
    parent = zip.parentElement;
    parent.classList.remove("error");
    parent.classList.remove("success");
    parent.classList.add("normal");
    parent = email.parentElement;
    parent.classList.remove("error");
    parent.classList.remove("success");
    parent.classList.add("normal");
    parent = phone.parentElement;
    parent.classList.remove("error");
    parent.classList.remove("success");
    parent.classList.add("normal");
    
}
function isValidEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
function isValidZip(zip){
    var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
    return zipCodePattern.test(zip);
}
function isValidPhone(phone){
    var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phoneNumberPattern.test(phone);
}
function isValidState(state){
    const stateAbbreviations = [
        'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
        'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
        'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
        'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
        'VT','VI','VA','WA','WV','WI','WY'
    ];
    var upperState = state.toUpperCase();
    console.log(upperState);
    for(let i = 0; i < stateAbbreviations.length; i++){
        if(stateAbbreviations[i] == upperState){
            return true;
        }
    }

}
export{onAfter}