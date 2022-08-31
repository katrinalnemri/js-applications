import { showView } from "./router.js";

const loginSection = document.querySelector("#form-login");

export function loginPage(){
    showView(loginSection);
}