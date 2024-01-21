// Fullscreen
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
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

  // The reference
  newCell = newRow.appendChild(document.createElement("td"))
  newCell.innerHTML = obj.reference
  
  // The observation
  var newCell = newRow.appendChild(document.createElement("td")) // Create a cell
  newCell.innerHTML = obj.observation // Add the observation as inner HTML.

  // The recommendation
  newCell = newRow.appendChild(document.createElement("td"))
  newCell.innerHTML = obj.recommendation

  // Create a cell that is populated only if the object has a media entry.
  newCell = newRow.appendChild(document.createElement("td"))
  newCell.classList.add("d-print-none")

  if (obj.media){ // If the object has a media item

    // Make a button to activate a modal pop up
    var btn = createModalButton() // Create the modal and assign to a variable.

    var identifier = "godFuckingDammit" + counter

    var target = "#" + identifier // Create a target from the object variable name
    
    // Assign dynamic target from the object name.
    btn.setAttribute("data-bs-target", target)

    newCell.appendChild(btn)

    var newModal = document.createElement("div") // Create the modal's outermost div.
    newModal.classList.add("modal", "fade")
    newModal.setAttribute("tabindex", "-1")
    newModal.id = identifier // Add the object name as the modal ID.

    var imgURL = "img/" + obj.media + ".jpg"

    // Add the modal innerHTML with custom image URL
    newModal.innerHTML = '<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button></div><div class="modal-body"><img src="' + imgURL + '" class="img-fluid"></div></div></div>'

    document.body.appendChild(newModal) // Append the modal to the bodoy.
  }
 
  counter++;

  tableBody.appendChild(newRow) // Append the row to the table.
}