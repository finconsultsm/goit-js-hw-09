const formData = {email: " ", message: " "};

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input");
const messageInput = form.querySelector("textarea");

emailInput.addEventListener("input", inputHandler) 
messageInput.addEventListener("input", inputHandler) 

const localData = JSON.parse(localStorage.getItem("feedback-form-state"))
if (localData) {
    emailInput.value = localData.email;
    messageInput.value = localData.message;
}

function inputHandler(evt) {
 const value = evt.target.value;
 const key = evt.target.name;

 formData[key] = value.trim();

 localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

form.addEventListener("submit", formSubmit);

function formSubmit(evt) {
    evt.preventDefault()
if (emailInput.value === "" || messageInput.value === "") {
    alert("Fill please all fields")
    return;
}
console.log(formData);

emailInput.value = "";
messageInput.value = "";

localStorage.removeItem("feedback-form-state")
}
