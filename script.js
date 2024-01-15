/*
 Try to only manipulate ID's instead of classes to not conflict with Bootstrap

 Array, labels:
 object, labelFlammable
 
*/


var mediaIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/></svg>'

var tableBody = document.getElementById("tableBody")

populateRow(labelFlammable)

function populateRow(object1){
  var newRow = document.createElement("tr")
  var newCell = newRow.appendChild(document.createElement("td"))
  newCell.innerHTML = object1.observation
  newCell = newRow.appendChild(document.createElement("td"))
  newCell.innerHTML = object1.recommendation
  newCell = newRow.appendChild(document.createElement("td"))
  newCell.innerHTML = object1.reference
  newCell = newRow.appendChild(document.createElement("td"))
  newCell.innerHTML = mediaIcon
  tableBody.appendChild(newRow)
  
}


// for (const [key, value] of Object.entries(labelFlammable)) {
//   console.log(`${key}: ${value}`);
//   newRow.innerHTML += "<td>" + `${value}` + "</td>";
// }