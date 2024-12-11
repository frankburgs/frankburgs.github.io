function populateCell(row, val, serious){

    newCell = row.appendChild(document.createElement("td")); // Chained cell creation and row append.

    newCell.innerHTML = val;

    newCell.classList.add("text-nowrap", "bg-black", "text-white") // Stop line breaks (every cell ?)

    if(serious){// Duplicating code because otherwise the row is not bordered red.
        newCell.classList.add("border-danger", "border-top")
    }
}