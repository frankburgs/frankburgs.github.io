frayedSling = {
  observation: "Sling is frayed.<br>Manufacturer's label is illegible.",
  recommendation: "<a href='https://www.uline.com/BL_4023/Slings'>Replace sling</a>",
  reference: '<a href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.184#p-1910.184(c)(1)">29 CFR 1910.184(c)(1)</a><br><a href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.184#p-1910.184(c)(14)">29 CFR 1910.184(c)(14)</a>',
  media: "frayedSling",
}

labelFlammableCabinet = {
  observation: "Flammable cabinet not labeled",
  recommendation: '<a href="https://www.amazon.com/SmartSign-Magnetic-Legend-Flammable-Yellow/dp/B00HK9XMH2?th=1">Purchase label</a> or<br><a href="https://www.uline.com/BL_2659/Brass-Stencils">DIY with stencils and red paint</a>',
  reference: '<a href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.106#p-1910.106(d)(3)(ii)">29 CFR 1910.106(d)(3)(ii)</a>',
  media: "flammableCabinet",
}

anecdoteFlamePants = {
  observation: "&quot;My girlfriend's pants caught on fire.&quot", // Needs innerHTML to set.
  recommendation: "Daily open floor toolbox safety talk",
  reference: "Anecdote",
}

fallingCylinder = {
  reference: "Witnessed",
  observation: "Gas cylinder company employee overloads a 2-cylinder cart with a third cylinder that subsequently falls from the cart and audibly depressurizes.",
  recommendation: "Daily open floor toolbox safety talk",
}

var cameraIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/></svg>'

observations = [frayedSling, labelFlammableCabinet, anecdoteFlamePants, fallingCylinder]
