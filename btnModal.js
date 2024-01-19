// Create a button

function createModalButton(){
  var btn = document.createElement("button")

  btn.classList.add("btn", "btn-primary")
  
  btn.setAttribute("type", "button")
  btn.setAttribute("data-bs-toggle", "modal")
  
  btn.innerHTML = cameraIcon

  return btn
}