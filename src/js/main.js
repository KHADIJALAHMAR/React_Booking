const registerPanel = document.querySelector(".auth_register");
const loginPanel = document.querySelector(".auth_login");
const switchToRegisterButton = document.querySelector("#to_register");
const switchToLoginButton = document.querySelector("#to_login");

switchToRegisterButton.addEventListener('click' , async (e) => {
    console.log('hello');
    registerPanel.classList.add('panel_on');
    registerPanel.classList.remove('panel_off');
    loginPanel.classList.add('panel_off');
    loginPanel.classList.remove('panel_on');
})

switchToLoginButton.addEventListener('click' , async (e) => {
    registerPanel.classList.add('panel_off');
    registerPanel.classList.remove('panel_on');
    loginPanel.classList.add('panel_on');
    loginPanel.classList.remove('panel_off');
})