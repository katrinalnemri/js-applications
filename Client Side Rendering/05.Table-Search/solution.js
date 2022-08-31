import {html,render} from '../node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/table';

const tableBody = document.querySelector('tbody');

async function getElements(){
   const response = await fetch(url);
   return Object.values(await response.json()).map(el => ({item : el , match : false}))
}

const data = Object.values(await getElements());

const tableTemplate = (data) => html`
${data.map(el => html`
<tr class=${el.match ? "select" : ""}>
<td>${el.item.firstName} ${el.item.lastName}</td>
<td>${el.item.email}</td>
<td>${el.item.course}</td>
</tr>
`)}
`

update(data);

function update(data){
   const tableFill = tableTemplate(data);
   render(tableFill,tableBody);
}

   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchText = document.getElementById("searchField").value.trim().toLocaleLowerCase();
      for(let s of data){
      s.match = Object.values(s.item).some(t => searchText && t.toLocaleLowerCase().includes(searchText))
      }
      update(data)
   }
