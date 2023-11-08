let firstNameInput = document.getElementById("fname");
let lastNameInput = document.getElementById("lname");
let dobInput = document.getElementById("dob");
let countryInput = document.getElementById("country");
let emailInput = document.getElementById("email");
let mobileNumInput = document.getElementById("mobilenum");
let professionInput = document.getElementById("profession");
let radioMaleInput = document.getElementById("radioMale");
let radioFemaleInput = document.getElementById("radioFemale");

let opacityDiv = document.getElementById("opacity_layer");
let warning = document.getElementById("warning");

let nameSpan = document.getElementById("nameSpan");
let dobSpan = document.getElementById("dobSpan");
let countrySpan = document.getElementById("countrySpan");
let genderSpan = document.getElementById("genderSpan");
let professionSpan = document.getElementById("professionSpan");
let emailSpan = document.getElementById("emailSpan");
let mobileNumberSpan = document.getElementById("mobileNumberSpan");

function getRadioBtnValue() {
    if (radioMaleInput.checked === true) {
        return "Male"
    }
    if (radioFemaleInput.checked === true) {
        return "Female"
    }
}

function clearRadioBtnValue() {
    radioMaleInput.checked = false;
    radioFemaleInput.checked = false;
}

function resetAllValues() {
    firstNameInput.value = ""
    lastNameInput.value = ""
    dobInput.value = ""
    countryInput.value = ""
    emailInput.value = ""
    professionInput.value = ""
    mobileNumInput.value = ""
    clearRadioBtnValue()
}

function validateMail(email) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
        return true;
    }
}

function showWarning(message) {
    warning.classList.add("warning-show");
    warning.innerText = message;
    setTimeout(() => {
        warning.classList.remove("warning-show");
    }, 3000);
}

function validateForm() {
    if (!(firstNameInput.value == "" || lastNameInput.value == "" || dobInput.value == "" || countryInput.value == "" || emailInput.value == "" || mobileNumInput.value == "")) {
        if (validateMail(emailInput.value)) {
            return true
        }
        else {
            showWarning("Please enter a valid email")
            return false;
        }
    }
    else{
        showWarning("Please enter all values")
        return false
    }
}

document.getElementById("btnSubmit").addEventListener("click", (event) => {
    event.preventDefault()
    if (validateForm()) {
        opacityDiv.classList.add("opacity-layer-show")
        nameSpan.innerText = firstNameInput.value + " " + lastNameInput.value
        dobSpan.innerText = dobInput.value
        countrySpan.innerText = countryInput.value
        genderSpan.innerText = getRadioBtnValue();
        professionSpan.innerText = professionInput.value
        emailSpan.innerText = emailInput.value
        mobileNumberSpan.innerText = mobileNumInput.value
    }
})

document.getElementById("btnReset").addEventListener("click", (event) => {
    event.preventDefault();
    resetAllValues();
})

document.getElementById("closePopup").addEventListener("click", (event) => {
    opacityDiv.classList.remove("opacity-layer-show")
    resetAllValues();
})
