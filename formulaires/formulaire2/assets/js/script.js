const inputs = document.querySelectorAll(".input-field input");
const labels = document.querySelectorAll(".input-field label");

document.addEventListener("DOMContentLoaded", ()=>{

    inputs.forEach(input=> {
        if (input.value != "") {
            input.parentElement.children[1].style.transform = "translateY(-100%)";
        }
        else {
            input.parentElement.children[1].style.transform = "";
        }

        input.addEventListener("input", ()=>{
            if (input.value != "") {
                input.parentElement.children[1].style.transform = "translateY(-100%)";
            }
            else {
                input.parentElement.children[1].style.transform = "";
            }
        });
    });
    
});
