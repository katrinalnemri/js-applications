async function attachEvents() {
    const url = "http://localhost:3030/jsonstore/forecaster/locations";
    const res = await fetch(url);
    const data = res.json();
    
    try {
    const location = document.getElementById("location").value;
    const inputUrl = `http://localhost:3030/jsonstore/forecaster/today/${location}`;
    const inputRes = await fetch(inputUrl);

    if(inputRes.status !== 200){
        throw new Error("Error");
    }

    const inputData = await inputRes.json();
    
    } catch (error) {
        
    }
    


}

attachEvents();