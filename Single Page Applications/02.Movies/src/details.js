import { showView } from "./router.js";

const detailsSection = document.querySelector("#movie-example");

export function detailsPage(){
    showView(detailsSection);
}