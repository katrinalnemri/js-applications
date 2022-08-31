import { showView } from "./router.js";

const createSection = document.querySelector("#add-movie");

export function createPage(){
    showView(createSection);
}