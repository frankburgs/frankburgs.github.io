// Create a button

function createModalButton(serious){
  var btn = document.createElement("button")

  if(serious){
    btn.classList.add("btn", "btn-danger")
  }else{
    btn.classList.add("btn", "btn-info")
  }

  btn.setAttribute("type", "button")
  btn.setAttribute("data-bs-toggle", "modal")
  
  btn.innerHTML = cameraIcon

  return btn
}