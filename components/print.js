// Removes classes of components for print
function removeClasses(things){
  things.forEach((thing) => {
    thing.classList.remove("bg-black", "text-white", "border-primary", "border-danger", "border-top")
  })
}

// Changes page appearance for printing.
function printIt(){
    var table = document.querySelector("table")
    table.classList.remove("table-bordered","table")
  
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