function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const messages = document.getElementById("messages");

    const sendBtn = document.getElementById("submit");
    const refreshBtn = document.getElementById("refresh");

    const author = document.querySelector("input[name='author'");
    const content = document.querySelector("input[name='content'");

    sendBtn.addEventListener("click", () => {
        if(author.value !== '' && content.value !== ''){
        const xml =  new XMLHttpRequest();
        xml.open("POST", url, true);
        xml.setRequestHeader("Content-Type", "application/json");
        xml.send(JSON.stringify({
            author:author.value,
            content: content.value
        }));
        author.value = '';
        content.value = '';
    }
    });

    refreshBtn.addEventListener("click", async () => {
        const res = await fetch(url);
        const data = await res.json();

        const arr = []
        for(let key in data){
            arr.push(`${data[key].author}: ${data[key].content}`)
            messages.value = arr.join("\n");
        }

    })

}

attachEvents();