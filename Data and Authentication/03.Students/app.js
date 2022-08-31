const url = "http://localhost:3030/jsonstore/collections/students";

const studentsTable = document.querySelector("#results tbody");
let students = []
fetch(url)
.then ( res => res.json())
.then(data => {
    console.log(data)
    for(let key in data){
        let newRow = `<tr>
        <td>${data[key].firstName}</td>
        <td>${data[key].lastName}</td>
        <td>${data[key].facultyNumber}</td>
        <td>${data[key].grade}</td>
        </tr>`
        students.push(newRow);
        studentsTable.innerHTML = students.join("")
    }
});

const button = document.getElementById("submit");
button.addEventListener("click", async(e) =>{
    e.preventDefault()
    const inputs = Array.from(document.querySelectorAll(".inputs input"))
    if(inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== '' && Number(inputs[3].value) && inputs[3].value !== ''){
        //console.log(data)
    await fetch(url, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName : inputs[0].value,
            lastName : inputs[1].value,
            facultyNumber : inputs[2].value,
            grade: inputs[3].value,
        })
        
    })
    }
    students=[]
    fetch(url)
.then ( res => res.json())
.then(data => {
    
    console.log(data)
    for(let key in data){
        let newRow = `<tr>
        <td>${data[key].firstName}</td>
        <td>${data[key].lastName}</td>
        <td>${data[key].facultyNumber}</td>
        <td>${data[key].grade}</td>
        </tr>`
        students.push(newRow);
        studentsTable.innerHTML = students.join("")
    }
});
    inputs.forEach(input => {
        input.value = ''
    });
})

