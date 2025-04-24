- [Modal](#modal)
- [td with linked text](#td-with-linked-text)
- [Create row then populate then append](#create-row-then-populate-then-append)
- [Timer to keep track of elapsed time in seconds](#timer-to-keep-track-of-elapsed-time-in-seconds)
- [Importing & exporting](#importing-&-exporting)
# Modal
- Using TWCSS
``` html
<button class="open-modal-btn">Open Modal</button>
<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden" id="modal">
    <div class="bg-white p-6 rounded shadow-lg w-1/3">
    <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
    <p class="mb-4">This is the content of the modal.</p>
    <button class="close-modal-btn bg-blue-500 text-white px-4 py-2 rounded">Close</button>
    </div>
</div>

<script>
document.querySelector('.open-modal-btn').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('hidden');
});

document.querySelector('.close-modal-btn').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});

// Close the modal when clicking outside of it
document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal')) {
    document.getElementById('modal').classList.add('hidden');
  }
});
</script>
```

# td with linked text

``` js
function myFun(something){ // receives observations, recommendations, or references (objects?)

    let newArray = [];

    for ( let obj of something ) {

        if ( obj.link ){
            let newAnchor = document.createElement("a");

            newAnchor.href = obj.link; // Set href attribute.
            newAnchor.innerHTML = obj.text; // Set inner text.

            let anchorStr = newAnchor.outerHTML; // Convert to string.
            newArray.push(anchorStr); // Add to array.
        }

        else newArray.push(obj.text); // Just add text element
    }

    let newStr = newArray.join("<br/>");
    let newCell = document.createElement("td");
    newCell.innerHTML = newStr;
    return newCell;
};
```

# Create row then populate then append

``` js
const root = document.getElementById("root");
let newRow = document.createElement("tr");

let counter = 1; // Begin counter.
let counterCell = document.createElement("td");
counterCell.innerHTML = counter;
newRow.appendChild(counterCell); // End counter.

newRow.appendChild(myFun(thing.references));

newRow.appendChild(myFun(thing.observations));

newRow.appendChild(myFun(thing.recommendations));

root.appendChild(newRow);
```

# Timer to keep track of elapsed time in seconds

``` js
let inc = 0;
let intervalId;
let someBool = false;
function starter(){
    someBool = true;
    counterStarter();
}
function stopper(){
    clearInterval(intervalId);
}
function counterStarter(){
    if(someBool){
        intervalId = setInterval(counting, 1000);
    }
}
function counting() {
    let cont = document.getElementById("root");
    inc++;
    cont.innerHTML = inc;
}
```

# Importing & exporting
- Images in React may need to be imported as default imports ❔
``` js
// Named import, multiple exports in one file
import { moduleScopedVariable } from './exampleModule.js';

// Default import, single default export
import exampleFunction from './exampleModule.js';
```