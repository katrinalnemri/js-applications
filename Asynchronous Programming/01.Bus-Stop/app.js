async function getInfo() {
    const stopId = document.getElementById("stopId").value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    const resultArea = document.getElementById("stopName");
    const busesList = document.getElementById("buses");

    try {
        busesList.innerHTML = "";
        const res = await fetch(url);

        if (res.status !== 200) {
            throw new Error("stop ID not in the list");
        }

        const data = await res.json();
        resultArea.textContent = data.name;
        const buses = data.buses;

        for (let bus in buses) {
            let newLi = document.createElement("li");
            newLi.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
            busesList.appendChild(newLi);
        }

    } catch (error) {
        resultArea.textContent = "Error";
    }

}