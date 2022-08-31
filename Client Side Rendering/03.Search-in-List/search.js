import {html,render} from '../node_modules/lit-html/lit-html.js';
import {towns} from './towns.js';

const townsTemplate = (data,match) => html`
<article>
<div id="towns">
<ul>
${data.map(t => itemTemplate(t, match))}
   </ul>
   </div>
   <input type="text" id="searchText" />
   <button @click= ${search}>Search</button>
   <div id="result">${matches(towns,match)}</div>
   </article>
   `

   const itemTemplate = (el,match) => html`
   <li class=${(match && el.toLowerCase().includes(match.toLowerCase())) ? "active" : "non"}>${el}</li>
   `

   const root = document.body;
   update();

function update(match = ''){
   const townsResult = townsTemplate(towns,match);
render(townsResult,root);
}

function search() {
   const match = document.getElementById('searchText').value;
   update(match);
}

function matches(towns,match){
   const matchesCount = towns.filter(t => match && t.toLowerCase().includes(match.toLowerCase())).length;
   return matchesCount ? `${matchesCount} matches found` : '';
}
