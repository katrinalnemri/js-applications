async function solution() {
    const mainArea = document.getElementById("main");
    const url = "http://localhost:3030/jsonstore/advanced/articles/list";

    const res = await fetch(url);
    const data = await res.json();
    data.forEach(e => {
        let divAcc = createElement("div","",["class","accordion"]);
        let divHead = createElement("div","",["class","head"]);
        let span = createElement("span",e.title);
        let button = createElement("button","More",["class","button","id",e._id])
        divHead.appendChild(span);
        divHead.appendChild(button);
        divAcc.appendChild(divHead);
        mainArea.appendChild(divAcc);
        let divExtra = createElement("div","",["class","extra"]);
        divAcc.appendChild(divExtra);
        let content = createElement("p");
        divExtra.appendChild(content)
        button.addEventListener('click',async (e) => {
            const contentUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${e.target.id}`;
            const contentRes = await fetch(contentUrl);
            const contentData = await contentRes.json();
    
            const hidden = e.target.textContent === "More";
            divExtra.style.display = hidden ? 'block' : "none";
            e.target.textContent = hidden ? "Less" : "More";
            
            content.textContent = hidden ? contentData.content : "";
            })
    });

    function createElement(type,content,attrs = []){
        const element = document.createElement(type);
        if(content){
        element.textContent = content;
        }

        if(attrs.length > 0){
            for(let i=0; i<attrs.length;i+=2){
                element.setAttribute(attrs[i],attrs[i+1])
            }
        }
        return element
    }
}
solution()