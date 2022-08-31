function solve() {
    const info = document.getElementById("info");
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");

    let stop = {
        next: "abc"
    };
    async function depart() {
        departBtn.disabled = true;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const res = await fetch(url);
        if (res.status !== 200) {
            info.textContent = "Error";
            arriveBtn.disabled = true;
            departBtn.disabled = true;
        }

        stop = await res.json();

        info.textContent = `Next stop ${stop.name}`;

        arriveBtn.disabled = false;
    }

    function arrive() {
        arriveBtn.disabled = true;
        info.textContent = `Arriving at ${stop.name}`;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();