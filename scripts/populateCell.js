function populateCell(row, val, serious){

    newCell = row.appendChild(document.createElement("td"));

    newCell.innerHTML = val;

    newCell.classList.add("text-nowrap", "text-white");
    if (counter%2 == 0) {
        newCell.classList.add("bg-dark", "border-0")
    }
    else {
        newCell.classList.add("bg-black", "border-0")
    }
}