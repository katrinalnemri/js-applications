function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const loadBtn = document.getElementById("btnLoad");
    const createBtn = document.getElementById("btnCreate");

    const phonebook = document.getElementById("phonebook");

    loadBtn.addEventListener("click", async () => {
        phonebook.replaceChildren();
        const res = await fetch(url);
        const data = await res.json();
        for(let key in data){
        let newLi = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        newLi.innerHTML = `${data[key].person}: ${data[key].phone}`;
        newLi.id = data[key]._id;
        newLi.appendChild(deleteBtn);
        phonebook.appendChild(newLi);
        deleteBtn.addEventListener("click", async (e) => {
            const id = e.target.parentNode.id;
            e.target.parentNode.remove();
            const deleteUrl = `http://localhost:3030/jsonstore/phonebook/${id}`;
            const response = await fetch(deleteUrl,{
                method:"DELETE",
                "Content-Type": "application/json"
            });
        });
        };

    });
    createBtn.addEventListener("click", async() => {
        const person = document.getElementById("person");
        const phone = document.getElementById("phone");

        if(person.value !== '' && phone.value !== ''){
            const res = await fetch(url,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    person:person.value,
                    phone:phone.value,
                })
            });
        }
            person.value = '';
            phone.value = '';
    })
}

attachEvents();