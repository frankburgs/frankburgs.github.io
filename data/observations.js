/* 

  {
    type: "", # fed, state, textbook, ansi, observation, anecdote, sortable
    observation: "",
    recommendation: "",
  }

*/

var observations = [
  {
    type: "fed",
    observation: "Sling is frayed<br>Manufacturer's label is illegible",
    recommendation: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.uline.com/BL_4023/Slings">Replace sling</a>',
    reference: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.184#p-1910.184(c)(1)">29 CFR 1910.184(c)(1)</a><br><a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.184#p-1910.184(c)(14)">29 CFR 1910.184(c)(14)</a>',
    media: "frayedSling",
  },

  {
    type: "fed",
    observation: "Flammable cabinet not labeled",
    recommendation: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.amazon.com/SmartSign-Magnetic-Legend-Flammable-Yellow/dp/B00HK9XMH2?th=1">Purchase label</a> or<br><a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.uline.com/BL_2659/Brass-Stencils">DIY with stencils and red paint</a>',
    reference: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.106#p-1910.106(d)(3)(ii)">29 CFR 1910.106(d)(3)(ii)</a>',
    media: "flammableCabinet",
  },

  {
    type: "fed",
    observation: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.osha.gov/laws-regs/standardinterpretations/1998-12-31-0">Oxy-fuel cylider carts do not have a fire barrier installed</a>',
    reference: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.253#p-1910.253(b)(4)(iii)">29 CFR 1910.253(b)(4)(iii)</a>',
    recommendation: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.airgas.com/product/Gas-Equipment/Cylinder-Carts-and-Storage/Cylinder-Carts/p/STCFW-12">Purchase</a> or DIY',
    media: "cartCylinders",
  },

  {
    type: "fed",
    observation: "Electrical box used as a storage surface",
    reference: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.303#p-1910.303(g)(1)(ii)">29 CFR 1910.303(g)(1)(ii)</a>',
    recommendation: 'Keep space about electrical equipment clear',
    media: "electricalSurface",
  },

  {
    type: "fed",
    observation: "Space around fire extinguishers is cluttered",
    reference: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.157#p-1910.157(c)(1)">29 CFR 1910.157(c)(1)</a>',
    recommendation: 'Maintain clearance around fire extinguishers',
    media: "fireExtinguisherClearance1",
    media2: "fireExtinguisherClearance2"
  },

  {
    type: "fed",
    observation: "Forklift forks have been cut through",
    reference: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.178#p-1910.178(q)(6)">29 CFR 1910.178(q)(6)</a>',
    recommendation: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.grainger.com/product/19ND78?gucid=N:N:PS:Paid:GGL:CSM-2295:4P7A1P:20501231&gad_source=1&gclid=EAIaIQobChMI4o3wlaKGhAMVGx6tBh1vEAJOEAQYAiABEgJM6PD_BwE&gclsrc=aw.ds">Replace forks</a>',
    media: "forkliftForks",
  },

  {
    type: "fed",
    observation: "Manufacturer's label on ladder is illegible",
    reference: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.23#p-1910.23(b)(9)">29 CFR 1910.23(b)(9)</a>',
    recommendation: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.grainger.com/product/24HW02?gucid=N:N:PS:Paid:GGL:CSM-2295:4P7A1P:20501231&gad_source=1&gclid=EAIaIQobChMI1feopZ7qgwMVrtXCBB2VLAXsEAQYASABEgKQYPD_BwE&gclsrc=aw.ds">Replace worn labels</a>',
    media: "ladderLabel",
  },

  {
    type: "fed",
    observation: "Exposed conducting cable in SMAW area",
    reference: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.254#p-1910.254(d)(9)(iii)">29 CFR 1910.254(d)(9)(iii)</a><br><a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.305#p-1910.305(f)(1)">29 CFR 1910.305(f)(1)</a>',
    recommendation: "Insulate conductors",
    media:'exposedWire1',
    media2: 'exposedWire2'
  },

  {
    type: "fed",
    observation: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.osha.gov/laws-regs/standardinterpretations/1998-12-16">Power tool cable has electrical tape covering</a>',
    reference: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.ecfr.gov/current/title-29/part-1926/section-1926.403#p-1926.403(b)(1)(iii)">29 CFR 1926.403(b)(1)(iii)</a>',
    recommendation: "Tag and isolate tool until repaired",
    media: 'tapedTool'
  },

  {
    type: "fed",
    observation: "Fire extinguisher inspection tag not filled out for December, January, February",
    reference: '<a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.ecfr.gov/current/title-29/part-1910/section-1910.157#p-1910.157(e)(2)">29 CFR 1910.157(e)(2)</a>',
    recommendation: '',
    media: 'fireExtinguisherTag1',
    media2: 'fireExtinguisherTag2'
  },

  {type: "state",
    observation: "<a class='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href='https://oag.ca.gov/sites/all/files/agweb/pdfs/cci/safety/eyewashes.pdf'>Eyewash station inspection tag not filled out</a>",
    reference: "<a class='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href='https://www.dir.ca.gov/title8/5162.html'>Ca Labor code Title 8<br>Article 109 &sect;5162</a>",
    media: "eyewashStationTag",
    recommendation: "<a class='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href='https://webstore.ansi.org/standards/isea/ansiiseaz358z87eyewasheye?gad_source=1&gclid=Cj0KCQiAwbitBhDIARIsABfFYIJIfr5DDjOZu0CWTnSelTivjSseF24aAZl7WaelHiXSvwg526JT_fgaAgSmEALw_wcB'>Purchase copy of ANSI Z87.1</a>",
  },

  {
    type: "ANSI",
    observation: "&quot;My girlfriend's pants caught on fire&quot", // Needs innerHTML to set.
    recommendation: "Discuss clothing flammability",
    reference: "<a class='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href='https://www.aws.org/Standards-and-Publications/Free-Resources/'>ANSI Z49.1 4.3</a>",
  },

  {
    type: "anecdote",
    observation: "&quot;The arc is almost too bright to look at,<br>I'm messing with my helmet's auto-darkening settings&quot;",
    recommendation: "Discuss arc-flash protection<br>Reference posted shade table",
    reference: "Anecdote",
  },

  {
    type: "anecdote",
    observation: "&quot;And then you get the black boogers at the end of the day&quot;",
    recommendation: "Discuss respiratory protection<br>past fume avoidance",
    reference: "Anecdote",
  },

  {
    type: "ANSI",
    reference: "<a class='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href='https://www.aws.org/Standards-and-Publications/Free-Resources/'>ANSI Z49.1 10.8.3.1</a>",
    observation: "Gas cylinder company employee overloads a 2-cylinder cart with a third cylinder,<br> that subsequently falls from the cart and audibly depressurizes",
    recommendation: ""
  },

  {
    type: "observation",
    reference: "Observation",
    observation: "Wash station could use some TLC",
    recommendation:  "Optimize wash station",
    media: "washStation"
  },

  {
    type: "observation",
    reference: "Observation",
    observation: "Students wearing a combination of no respiratory protection, balaclavas,<br>and half-mask respirators with both organic and particulate filters attached",
    recommendation: "Discuss respiratory protection"
  },

  {
    type: "ANSI",
    reference: "<a class='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href='https://www.aws.org/Standards-and-Publications/Free-Resources/'>ANSI Z49.1 3.2.3.4</a>",
    observation: "Students DIY hot warning label",
    recommendation: "Designate hot material area",
    media: "hotArea",
  },

  {
    type: "ANSI",
    reference: "<a class='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href='https://www.aws.org/Standards-and-Publications/Free-Resources/'>ANSI Z49.1 E11.4.9.2</a>",
    observation: "Student arc-welding while standing in running water",
    media: "puddleBoots",
    recommendation: " ",
    serious: "yes",
  },

  {
    type: "observation",
    reference: "Observation",
    observation: "&ge;3 students show up to class on a school holiday",
    recommendation:"Use e-mail notification for days off"
  },

  {
    type: "textbook",
    reference: '"Modern Welding" 12th ed.<br>G.W., Section 1.2 page 6',
    observation: "Textbook mentions welder&apos;s ability to douse<br>entire body using emergency shower",
    recommendation: "Consider emergency shower<br>Discuss fire blanket usage", 
  },

  {
    type: "textbook",
    reference: '"Modern Welding" 12th ed.<br>G.W., Section 1.5.1 page 20',
    observation: "Textbook mentions areas where > 220 V is present must be marked",
    recommendation: "Add signage &quot;Danger: High Voltage&quot;", 
  },

  {
    type: "ANSI",
    reference: "<a class='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href='https://www.aws.org/Standards-and-Publications/Free-Resources/'>ANSI Z49.1 E4.3</a>",
    observation: "Students trousers do not overlap with boot top",
    recommendation: "PPE signage",
  },

  {
    type: "ANSI",
    reference: "<a class='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href='https://www.aws.org/Standards-and-Publications/Free-Resources/'>ANSI Z49.1 11.4.9.4</a>",
    observation: "Electrode holders are not in good repair",
    recommendation: "Replace electrode holders",
    media: "electrodeHolder"
  },

  {
    type: "observation",
    reference: "Observation",
    observation: "Signage deteriorated",
    recommendation: "Replace signage",
    media: "deterioratedSignage"
  },

  {
    type: "observation",
    reference: "Observation",
    observation: "Duct tape and paper used to mark malfunctioning equipment",
    recommendation: "Document LOTO procedures",
    media: "SMAWmachineLOTO"
  },

  {
    type: "observation",
    reference: "Observatiom",
    observation: "Leather jackets dumped in container develop smell during wet weather",
    recommendation: "Use coat rack for leather jacket storage",
    media: "leatherJacketDump"
  },

  {
    type: "observation",
    reference: "Observation",
    observation: "Students eat in the shop and near metal cutting areas",
    recommendation: "",
  },

  {

    type: "ANSI",
    reference: "<a class='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href='https://www.aws.org/Standards-and-Publications/Free-Resources/'>ANSI Z49.1 4.2.1.4</a>",
    observation: "College administrative staff perform media & walkthrough<br>in working area during hot work without PPE",
    recommendation: "",
  },

  {
    type: "observation",
    reference: "Observation",
    observation: "Curriculum does not include coverage of AWS ANSI standards,<br>OSHA standards, safety data sheets, technical data sheets, or user manuals",
    recommendation: "",
  },

  {
    type: "observation",
    reference: "Observation",
    observation: "No anonymous institutional feedback mechanism promoted",
    recommendation: "",
  },

  {
    type: "observation",
    reference: 'Observation',
    observation: "Majority of new students fail safety quiz",
    recommendation: "Add to controlled documents:<br>safety exam, safety exam answer key",
  },

  {
    type: "observation",
    reference: 'Observation',
    observation: "Introductory class using mixed metal stock",
    recommendation: "Document consumible life cycle"
  },

  {
    type: "anecdote",
    observation: "&quot;What am I supposed to do, just fix everything?&quot;",
    recommendation: "Empower teaching staff with confidence<br/>to at least try to &quot;fix everything&quot;",
    reference: "Anecdote",
  },

  
]