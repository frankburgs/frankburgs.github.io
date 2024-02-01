/*
-------------------functions:
printIt
toggleFullScreen
populateCell
populateRow

*/

var tableBody = document.getElementById("tableBody")
var counter = 1; // Counter to match button to modal ID's and count line items.
var toggleBtn = document.getElementById("btnToggleFullScreen")

for (observation in observations){ // Populates table
  populateRow(observations[observation])
}

function toggleFullScreen() { // Fullscreen toggle
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    toggleBtn.innerHTML = contractScreenIcon;
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
    toggleBtn.innerHTML = fullScreenIcon;
  }
}

function populateCell(row, val, serious){

  newCell = row.appendChild(document.createElement("td"))

  newCell.innerHTML = val

  newCell.classList.add("text-nowrap", "bg-black", "text-white") // Stop line breaks (every cell ?)
  
  if(serious){// Duplicating code because otherwise the row is not bordered red.
    newCell.classList.add("border-danger", "border-top")
  }
}

function populateRow(obj){

  var newRow = document.createElement("tr") // Create a table row.
  
  if(obj.serious){
    newRow.classList.add("border-danger", "border-top")
    var serious = true;
  }else{
    newRow.classList.add("border-primary")
    var serious = false;
  }
  
  // Line item #
  populateCell(newRow, counter.toString(), serious)

  // The reference
  populateCell(newRow, obj.reference, serious)

  // The observation
  populateCell(newRow, obj.observation, serious)

  // The recommendation
  populateCell(newRow, obj.recommendation, serious)

  // Create a cell that is populated only if the object has a media entry.
  newCell = newRow.appendChild(document.createElement("td"))
  newCell.classList.add("d-print-none", "bg-black")
  
  // Make border red if serious
  if(serious){// Duplicating code because otherwise the row is not bordered red.
    newCell.classList.add("border-danger", "border-top")
  }

  if (obj.media){ // If the object has a media item

    // Button for modal.
    var btn = createModalButton(serious) // Create button to activate modal.
    var identifier = "modal" + counter.toString() // Unique value to match button to modal, trying to not let the ID be an integer.
    var target = "#" + identifier // Create a target from the object variable name
    btn.setAttribute("data-bs-target", target) // Assign dynamic target from the object name.
    newCell.appendChild(btn)

    // Modal.
    var newModal = document.createElement("div") // Create the modal's outermost div.
    newModal.classList.add("modal", "fade", "bg-black")
    newModal.setAttribute("tabindex", "-1") // Bootstrap says so.
    newModal.id = identifier // Add the object name as the modal ID.
    var imgURL = "images/" + obj.media + ".jpg"

    // Populate modal HTML
    newModal.innerHTML = '<div class="modal-dialog"><div class="modal-content bg-black"><div class="modal-header"><button type="button" class="btn btn-info btn-lg" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg></button></div><div class="modal-body"><img src="' + imgURL + '" class="img-fluid"></div></div></div>'
    document.body.appendChild(newModal) // Append the modal to the bodoy.
  }

  counter++; // The counter helps match dynamically generated id's from modal to button.
  tableBody.appendChild(newRow) // Append the row to the table.
}

function removeClasses(things){
  things.forEach((thing) => {
    thing.classList.remove("bg-black", "text-white", "border-primary", "border-danger", "border-top")
  })
}

function printIt(){

  var table = document.querySelector("table")
  table.classList.remove("table-bordered")

  var rows = document.querySelectorAll("tr")
  removeClasses(rows)

  var cells = document.querySelectorAll("td")
  removeClasses(cells)

  var heads = document.querySelectorAll("th")
  removeClasses(heads)

  var links = document.querySelectorAll("a")
  links.forEach((link) => {
    link.classList.remove("link-info", "link-offset-2", "link-underline-opacity-25", "link-underline-opacity-100-hover")
  })

  window.print()
}