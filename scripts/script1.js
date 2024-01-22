// Fullscreen
var toggleBtn = document.getElementById("btnToggleFullScreen")
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    toggleBtn.innerHTML = contractScreenIcon;
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
    toggleBtn.innerHTML = fullScreenIcon;
  }
}

// Assign table body to a variable.
var tableBody = document.getElementById("tableBody")

var counter = 1; // Counter to match button to modal ID's and count line items.

for (observation in observations){
  populateRow(observations[observation]) // Call the function to populate a row with an object.
}

function populateRow(obj){
  var newRow = document.createElement("tr") // Create a table row.

  // Line item #
  newCell = newRow.appendChild(document.createElement("td"))
  var lineCount = counter
  newCell.innerHTML = lineCount.toString()
  newCell.classList.add("bg-black","text-white")

  // The reference
  newCell = newRow.appendChild(document.createElement("td"))
  newCell.classList.add("text-nowrap") // Stop line breaks in this column.
  newCell.innerHTML = obj.reference
  newCell.classList.add("bg-black","text-white")

  // The observation
  var newCell = newRow.appendChild(document.createElement("td")) // Create a cell
  newCell.innerHTML = obj.observation // Add the observation as inner HTML.
  newCell.classList.add("bg-black","text-white")

  // The recommendation
  newCell = newRow.appendChild(document.createElement("td"))
  newCell.innerHTML = obj.recommendation
  newCell.classList.add("bg-black","text-white")

  // Create a cell that is populated only if the object has a media entry.
  newCell = newRow.appendChild(document.createElement("td"))
  newCell.classList.add("d-print-none")
  newCell.classList.add("bg-black","text-white")
  
  if (obj.media){ // If the object has a media item

    // Make a button to activate a modal pop up
    var btn = createModalButton() // Create the modal and assign to a variable.

    var identifier = "godFuckingDammit" + counter

    var target = "#" + identifier // Create a target from the object variable name
    
    // Assign dynamic target from the object name.
    btn.setAttribute("data-bs-target", target)

    newCell.appendChild(btn)

    var newModal = document.createElement("div") // Create the modal's outermost div.
    newModal.classList.add("modal", "fade", "bg-black")
    newModal.setAttribute("tabindex", "-1")
    newModal.id = identifier // Add the object name as the modal ID.

    var imgURL = "img/" + obj.media + ".jpg"

    // Add the modal innerHTML with custom image URL
    newModal.innerHTML = '<div class="modal-dialog"><div class="modal-content bg-black"><div class="modal-header"><button type="button" class="btn btn-info btn-lg" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/></svg></button></div><div class="modal-body"><img src="' + imgURL + '" class="img-fluid"></div></div></div>'

    document.body.appendChild(newModal) // Append the modal to the bodoy.
  }
 
  counter++;

  tableBody.appendChild(newRow) // Append the row to the table.
}