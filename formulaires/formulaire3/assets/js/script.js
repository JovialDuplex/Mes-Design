const tl = gsap.timeline();
const registerBt = document.querySelector(".register-bt");
const loginForm = document.querySelector(".main-container .login-form")
const registerForm = document.querySelector(".main-container .register-form")

registerBt.onclick = ()=> {
    tl.to(".main-container", {
        rotation: 180,
        duration: 3,
        scale: 0,
        opacity: 0,  
        
    });

    tl.to(".main-container", {
        rotation: 0,
        duration: 3,
        scale: 1,
        opacity: 1,
    });
    
    registerForm.style.display = "block";
    loginForm.style.display = "none";
    
}

// script of button icon 
const buttonIcon = document.querySelector(".input-field .btn-icon");
buttonIcon.addEventListener("mouseenter", event=>{
    buttonIcon.classList.replace("fa-eye-slash", "fa-eye");
});

buttonIcon.addEventListener("mouseleave", event=>{
    buttonIcon.classList.replace("fa-eye", "fa-eye-slash");
});

// document.getElementById("bt").addEventListener("mou")