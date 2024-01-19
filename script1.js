// Try to only manipulate ID's instead of classes to not conflict with Bootstrap

var tableBody = document.getElementById("tableBody") // Assign table body to a variable.

for (counter in observations){
  populateRow(observations[counter]) // Call the function to populate a row with an object.
}

// A counter to match buttons with modals
var i = 0;

function populateRow(obj){
  var newRow = document.createElement("tr") // Create a table row.

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

    var identifier = "godFuckingDammit" + i
    i++;
    var target = "#" + identifier // Create a target from the object variable name
    
    // Assign dynamic target from the object name
    btn.setAttribute("data-bs-target", target)

    newCell.appendChild(btn)

    var newModal = document.createElement("div") // Create the modal's outermost div.
    newModal.classList.add("modal", "fade")
    newModal.setAttribute("tabindex", "-1")
    newModal.id = identifier // Add the object name as the modal ID.

    var imgURL = "img/" + obj.media + ".jpg"

    // Add the modal innerHTML with custom image URL
    newModal.innerHTML = '<div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <h1 class="modal-title fs-5" id="exampleModalLabel">Relevant Image</h1> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div> <div class="modal-body"> <img src="' + imgURL + '" class="img-fluid"> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> </div> </div> </div>'

    document.body.appendChild(newModal) // Append the modal to the bodoy.
  }
 
  tableBody.appendChild(newRow) // Append the row to the table.
  
}


