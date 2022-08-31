import {html,render} from '../node_modules/lit-html/lit-html.js';

document.getElementById('btnLoadTowns').addEventListener('click', (e) => {
    e.preventDefault();

    const listTemplate = (data) => html`
    <ul>
    ${data.map(el => html`
    <li>${el}</li>
    `)}
    </ul>
    `
    if(document.getElementById('towns').value == ''){
    }
    else{
    const root = document.getElementById('root');
    const towns = document.getElementById('towns').value.split(", ");

    const result = listTemplate(towns);

    render(result,root);
    document.getElementById('towns').value = '';
    }

})