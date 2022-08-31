import { showView } from "./router.js";

const editSection = document.querySelector("#edit-movie");

export function editPage(){
    showView(editSection);
}