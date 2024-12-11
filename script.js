var tableBody = document.getElementById("tableBody")

var counter = 1; // Counter to match button to modal ID's and count line items.

const sortedObservations = sortObservations(); // Get the sorted list of observations.

for (observation in sortedObservations){ // Populate the table with observations.
  populateRow(sortedObservations[observation])
}