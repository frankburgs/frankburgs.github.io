// Create a button

function btnModal (serious) {
  var btn = document.createElement("button")

  if(serious){
    btn.classList.add("btn", "btn-danger")
  }else{
    btn.classList.add("btn", "btn-primary")
  }

  btn.setAttribute("type", "button")
  btn.setAttribute("data-bs-toggle", "modal")

  btn.innerHTML = cameraIcon

  return btn
}