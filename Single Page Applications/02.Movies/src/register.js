import { showView } from "./router.js";

const registerSection = document.querySelector("#form-sign-up");

export function registerPage(){
    showView(registerSection);
}