function validateForm(){
    const form = document.getElementById("form");
    isValid = true;

    //Remove Error
    document.querySelectorAll(".error").forEach(error => error.innerHTML = "");

        for(let element of form.elements){
            if(element.tagName === "INPUT" || element.tagName === "TEXTAREA"){
                const errorElement = document.createElement("div");
                errorElement.className = "error";
                errorElement.style.color = "red";
            
                switch(element.type){
                    case "text" :
                        if(element.value.length < 2 || element.value.length > 16){
                            errorElement.innerHTML = "Name must be 2 to 16 characters";
                            element.after(errorElement);
                            isValid = false;
                        }
                        break;
                    case "email" :
                        if(!element.value.includes("@") || !element.value.includes(".")){
                            errorElement.innerHTML = "please enter valid mail";
                            element.after(errorElement);
                            isValid = false;
                        }
                        break;
                    case "password" :
                        if(element.value.length < 6){
                            errorElement.innerHTML = "Password must be at least 6 characters";
                            element.after(errorElement);
                            isValid = false;
                        }
                        if(element.value !== document.getElementById("password").value){
                            errorElement.innerHTML = "password must be same";
                            element.after(errorElement);
                            isValid = false;
                        }
                        break;
                }
            }
        }
        return isValid;
}

document.querySelector("form").onsubmit = function(event){
    if(!validateForm()){
        event.preventDefault();
    }
}








