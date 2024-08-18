var tableBody = document.getElementById("tableBody")

var counter = 1; // Counter to match button to modal ID's and count line items.
const sortedObservations = sortObservations();
for (observation in sortedObservations){
  populateRow(sortedObservations[observation])
}



// serious needs to be sent to cell to color top red as the bootstrap row does not.
function populateCell(row, val, serious){

  newCell = row.appendChild(document.createElement("td"));

  newCell.innerHTML = val;

  newCell.classList.add("text-nowrap", "bg-black", "text-white") // Stop line breaks (every cell ?)
  
  if(serious){// Duplicating code because otherwise the row is not bordered red.
    newCell.classList.add("border-danger", "border-top")
  }
}


// Cannot daisy chain observations[obs].anything 🤔
function populateRow(obj){

  var newRow = document.createElement("tr") // Create a table row.
  
  if(obj.serious){
    newRow.classList.add("border-danger", "border-top")
    var serious = true; // why ?
  }else{
    newRow.classList.add("border-primary")
    var serious = false;
  }
  
  // Line item #
  newCell = newRow.appendChild(document.createElement("td"))

  newCell.innerHTML = counter.toString();

  newCell.classList.add("text-nowrap", "bg-black", "text-white", "text-start", "d-print-none") // Stop line breaks (every cell ?)
  
  if(serious){// Duplicating code because otherwise the row is not bordered red.
    newCell.classList.add("border-danger", "border-top");
  }
  
  // The reference
  populateCell(newRow, obj.reference, serious)

  // The observation
  populateCell(newRow, obj.observation, serious)

  // The recommendation
  populateCell(newRow, obj.recommendation, serious)

  // Create a cell that is populated only if the object has a media entry.
  newCell = newRow.appendChild(document.createElement("td"))
  newCell.classList.add("d-print-none", "bg-black", "text-end")
  
  // Make border red if serious
  if(serious){// Duplicating code otherwise the row is not bordered red.
    newCell.classList.add("border-danger", "border-top")
  }

  if (obj.media){ // If the object has a media item

    // Button for modal.
    var btn = createModalButton(serious) // Create button to activate modal.

    var identifier = "modal" + counter.toString() // Unique value to match button to modal, trying to not let the ID be an integer.

    var target = "#" + identifier // Create a target from the object variable name.

    btn.setAttribute("data-bs-target", target) // Assign dynamic target from the object name.

    newCell.appendChild(btn)

    // Modal.
    var newModal = document.createElement("div") // Create the modal's outermost div.
    newModal.classList.add("modal", "fade", "bg-black")
    newModal.setAttribute("tabindex", "-1") // Bootstrap says so.
    newModal.id = identifier // Add the object name as the modal ID.
    var imgURL = "data/images/" + obj.media + ".jpg"

    // Maybe do this conditionally on image click.
    // Populate modal HTML.
    if(obj.media2){
      var imgURL2 = "data/images/" + obj.media2 + ".jpg"
      newModal.innerHTML = '<div class="modal-dialog modal-xl"><div class="modal-content bg-dark"><div class="modal-header"><button type="button" class="btn btn-info btn-lg" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg></button></div><div class="modal-body"><img src="' + imgURL + '" class="w-50"><img src="' + imgURL2 + '" class="w-50"></div></div></div>'
    }
    else{
      newModal.innerHTML = '<div class="modal-dialog"><div class="modal-content bg-dark"><div class="modal-header"><button type="button" class="btn btn-info btn-lg" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg></button></div><div class="modal-body"><img src="' + imgURL + '" class="img-fluid"></div></div></div>'
    }
    document.body.appendChild(newModal) // Append the modal to the body.
  }

  counter++; // The counter matches dynamically generated id's from modal to button.
  
  tableBody.appendChild(newRow) // Append the row to the table.
}