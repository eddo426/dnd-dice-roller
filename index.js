let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
// let count = 0;

function rollD(dNumber) {
    countEl.textContent = Math.floor(Math.random() * dNumber) + 1;
    save();
}

function save() {
    if (saveEl.textContent != "Previous rolls: ") {
        countStr = countEl.textContent + " - " + countStr;
    } else {
        countStr = countEl.textContent;
    }
    saveEl.textContent = "Previous entries: " + countStr;
}