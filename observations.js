/* 
  {
    type: "", # osha, state, textbook, ansi, observation, anecdote
    obs(ervation): "", # deed of note
    obsLink: "",  # a url to a page giving insight into the deed
    rec(ommendation): "", # what can be done to assuage the deed
    recLink: "", # a url to a page giving insight into the assuagement
    ref(erence): "", # a source of knowledge on the subject matter
    refLink: "", # a link to said source
    img: "" # an image of the deed
  }
*/

function populateTable (){
  // Assign body to a variable
  var bod = document.getElementsByTagName("body")
  console.log(bod)
  // Create table and append

  // Create table header and append
  // #, observation, reference, recommendation

}

function populateRow (info) {
  // Create row

  // Number

  // Type

  // Obs

  // Rec

  // Ref

}

var observations = [
  {
    type: "osha",
    obs: "Sling is frayed<br>Manufacturer's label is illegible",
    rec: 'Replace sling',
    recLink: 'https://www.uline.com/BL_4023/Slings',
    ref: [
      "29 CFR 1910.184(c)(1)",
      "29 CFR 1910.184(c)(14)"],
    refLink: [
      'https://www.ecfr.gov/current/title-29/part-1910/section-1910.184#p-1910.184(c)(1)',
      'https://www.ecfr.gov/current/title-29/part-1910/section-1910.184#p-1910.184(c)(14)'],
    img: "frayedSling",
  },

  {
    type: "osha",
    obs: "Flammable cabinet not labeled",
    rec: [
      "Purchase label",
      "DIY with stencils and red paint"
    ],
    recLink: [
      "https://www.amazon.com/SmartSign-Magnetic-Legend-Flammable-Yellow/dp/B00HK9XMH2?th=1",
      "https://www.uline.com/BL_2659/Brass-Stencils"
    ],
    ref: '29 CFR 1910.106(d)(3)(ii)',
    refLink: 'https://www.ecfr.gov/current/title-29/part-1910/section-1910.106#p-1910.106(d)(3)(ii)',
    img: "flammableCabinet"
  },

  {
    type: "osha",
    obs: 'Oxy-fuel cylider carts do not have a fire barrier installed',
    obsLink: 'https://www.osha.gov/laws-regs/standardinterpretations/1998-12-31-0',
    ref: '29 CFR 1910.253(b)(4)(iii)',
    refLink: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.253#p-1910.253(b)(4)(iii)",
    rec: 'Purchase or DIY',
    recLink: "https://www.airgas.com/product/Gas-Equipment/Cylinder-Carts-and-Storage/Cylinder-Carts/p/STCFW-12",
    media: "cartCylinders"
  },

  {
    type: "osha",
    obs: "Electrical box used as a storage surface",
    ref: '29 CFR 1910.303(g)(1)(ii)',
    refLink: 'https://www.ecfr.gov/current/title-29/part-1910/section-1910.303#p-1910.303(g)(1)(ii)',
    rec: 'Keep space about electrical equipment clear',
    media: "electricalSurface",
  },

  {
    type: "osha",
    obs: "Space around fire extinguishers is cluttered",
    ref: '29 CFR 1910.157(c)(1)',
    refLink: 'https://www.ecfr.gov/current/title-29/part-1910/section-1910.157#p-1910.157(c)(1)',
    rec: 'Maintain clearance around fire extinguishers',
    media: "fireExtinguisherClearance1",
    media2: "fireExtinguisherClearance2"
  },

  {
    type: "osha",
    obs: "Forklift forks have been cut through",
    ref: '29 CFR 1910.178(q)(6)',
    refLink: 'https://www.ecfr.gov/current/title-29/part-1910/section-1910.178#p-1910.178(q)(6)',
    rec: 'Replace forks',
    recLink: 'https://www.grainger.com/product/19ND78?gucid=N:N:PS:Paid:GGL:CSM-2295:4P7A1P:20501231&gad_source=1&gclid=EAIaIQobChMI4o3wlaKGhAMVGx6tBh1vEAJOEAQYAiABEgJM6PD_BwE&gclsrc=aw.ds',
    media: "forkliftForks",
  },

  {
    type: "osha",
    obs: "Manufacturer's label on ladder is illegible",
    ref: '"29 CFR 1910.23(b)(9)',
    refLink: 'https://www.ecfr.gov/current/title-29/part-1910/section-1910.23#p-1910.23(b)(9)',
    rec: 'Replace worn labels',
    recLink: 'https://www.grainger.com/product/24HW02?gucid=N:N:PS:Paid:GGL:CSM-2295:4P7A1P:20501231&gad_source=1&gclid=EAIaIQobChMI1feopZ7qgwMVrtXCBB2VLAXsEAQYASABEgKQYPD_BwE&gclsrc=aw.ds',
    media: "ladderLabel",
  },

  {
    type: "osha",
    obs: "Exposed conducting cable in SMAW area",
    ref: [
      '29 CFR 1910.254(d)(9)(iii)',
      '29 CFR 1910.305(f)(1)'
    ],
    refLink: [
      'https://www.ecfr.gov/current/title-29/part-1910/section-1910.254#p-1910.254(d)(9)(iii)',
      'https://www.ecfr.gov/current/title-29/part-1910/section-1910.305#p-1910.305(f)(1)'
    ],
    rec: "Insulate conductors",
    media:[
      'exposedWire1',
      'exposedWire2'
    ]
  },

  {
    type: "osha",
    obs: 'Power tool cable has electrical tape covering',
    obsLink: 'https://www.osha.gov/laws-regs/standardinterpretations/1998-12-16',
    ref: '29 CFR 1926.403(b)(1)(iii)',
    refLink: 'https://www.ecfr.gov/current/title-29/part-1926/section-1926.403#p-1926.403(b)(1)(iii)',
    rec: "Tag and isolate tool until repaired",
    media: 'tapedTool'
  },

  {
    type: "osha",
    obs: "Fire extinguisher inspection tag not filled out for December, January, February",
    ref: '29 CFR 1910.157(e)(2)',
    refLink: 'https://www.ecfr.gov/current/title-29/part-1910/section-1910.157#p-1910.157(e)(2)',
    media: [
      'fireExtinguisherTag1',
      'fireExtinguisherTag2'
    ]
  },

  {
    type: "osha",
    obs: "Student uses personal Milwaukee<br/>angle grinder with guard removed",
    ref: '29 CFR 1910.243(c)(4)',
    refLink: 'https://www.ecfr.gov/current/title-29/part-1910/subpart-P#p-1910.243(c)(4)',
    rec: "Student safety training checklist<br/>for each tool used in the shop.",
  },

  {
    type: "state",
    obs: "Eyewash station inspection tag not filled out",
    obsLink: 'https://oag.ca.gov/sites/all/files/agweb/pdfs/cci/safety/eyewashes.pdf',
    ref: "Ca Labor code Title 8<br>Article 109 &sect;5162",
    refLink: 'https://www.dir.ca.gov/title8/5162.html',
    media: "eyewashStationTag",
    rec: "Purchase copy of ANSI Z87.1",
    recLink: 'https://webstore.ansi.org/standards/isea/ansiiseaz358z87eyewasheye?gad_source=1&gclid=Cj0KCQiAwbitBhDIARIsABfFYIJIfr5DDjOZu0CWTnSelTivjSseF24aAZl7WaelHiXSvwg526JT_fgaAgSmEALw_wcB'
  },

  {
    type: "ANSI",
    obs: "&quot;My girlfriend's pants caught on fire&quot", // Needs innerHTML to set.
    rec: "Discuss clothing flammability",
    ref: "ANSI Z49.1 4.3",
    refLink: 'https://www.aws.org/Standards-and-Publications/Free-Resources/'
  },

  {
    type: "anecdote",
    obs: "&quot;The arc is almost too bright to look at,<br>I'm messing with my helmet's auto-darkening settings&quot;",
    rec: "Discuss arc-flash protection<br>Reference posted shade table",
    ref: "Anecdote",
  },

  {
    type: "anecdote",
    obs: "&quot;And then you get the black boogers at the end of the day&quot;",
    rec: "Discuss respiratory protection<br>past fume avoidance",
    ref: "Anecdote",
  },

  {
    type: "ANSI",
    ref: "ANSI Z49.1 10.8.3.1",
    refLink: 'https://www.aws.org/Standards-and-Publications/Free-Resources/',
    obs: "Gas cylinder company employee overloads a 2-cylinder cart with a third cylinder,<br> that subsequently falls from the cart and audibly depressurizes",
  },

  {
    type: "observation",
    ref: "Observation",
    obs: "Wash station could use some TLC",
    rec:  "Optimize wash station",
    media: "washStation"
  },

  {
    type: "observation",
    ref: "Observation",
    obs: "Students wearing a combination of no respiratory protection, balaclavas,<br>and half-mask respirators with both organic and particulate filters attached",
    rec: "Discuss respiratory protection"
  },

  {
    type: "ANSI",
    ref: "ANSI Z49.1 3.2.3.4",
    refLink: 'https://www.aws.org/Standards-and-Publications/Free-Resources/',
    obs: "Students DIY hot warning label",
    rec: "Designate hot material area",
    media: "hotArea",
  },

  {
    type: "ANSI",
    ref: "ANSI Z49.1 E11.4.9.2",
    refLink: 'https://www.aws.org/Standards-and-Publications/Free-Resources/',
    obs: "Student arc-welding while standing in running water",
    media: "puddleBoots",
    serious: "yes",
  },

  {
    type: "observation",
    ref: "Observation",
    obs: "&ge;3 students show up to class on a school holiday",
    rec:"Use e-mail notification for days off"
  },

  {
    type: "textbook",
    ref: '"Modern Welding" 12th ed.<br>G.W., Section 1.2 page 6',
    obs: "Textbook mentions welder&apos;s ability to douse<br>entire body using emergency shower",
    rec: "Consider emergency shower<br>Discuss fire blanket usage", 
  },

  {
    type: "textbook",
    ref: '"Modern Welding" 12th ed.<br>G.W., Section 1.5.1 page 20',
    obs: "Textbook mentions areas where > 220 V is present must be marked",
    rec: "Add signage &quot;Danger: High Voltage&quot;", 
  },

  {
    type: "ANSI",
    ref: "ANSI Z49.1 E4.3",
    refLink: "https://www.aws.org/Standards-and-Publications/Free-Resources/",
    obs: "Students trousers do not overlap with boot top",
    rec: "PPE signage",
  },

  {
    type: "ANSI",
    ref: "ANSI Z49.1 11.4.9.4",
    refLink: 'https://www.aws.org/Standards-and-Publications/Free-Resources/',
    obs: "Electrode holders are not in good repair",
    rec: "Replace electrode holders",
    media: "electrodeHolder"
  },

  {
    type: "observation",
    ref: "Observation",
    obs: "Signage deteriorated",
    rec: "Replace signage",
    media: "deterioratedSignage"
  },

  {
    type: "observation",
    ref: "Observation",
    obs: "Duct tape and paper used to mark malfunctioning equipment",
    rec: "Document LOTO procedures",
    media: "SMAWmachineLOTO"
  },

  {
    type: "observation",
    ref: "Observatiom",
    obs: "Leather jackets dumped in container develop smell during wet weather",
    rec: "Use coat rack for leather jacket storage",
    media: "leatherJacketDump"
  },

  {
    type: "observation",
    ref: "Observation",
    obs: "Students eat in the shop and near metal cutting areas",
  },

  {

    type: "ANSI",
    ref: "ANSI Z49.1 4.2.1.4</a>",
    refLink: "https://www.aws.org/Standards-and-Publications/Free-Resources/",
    obs: "College administrative staff perform media & walkthrough<br>in working area during hot work without PPE",
  },

  {
    type: "observation",
    ref: "Observation",
    obs: "Curriculum does not include coverage of AWS ANSI standards,<br>OSHA standards, safety data sheets, technical data sheets, user manuals",
  },

  {
    type: "observation",
    ref: "Observation",
    obs: "No anonymous institutional feedback mechanism promoted",
  },

  {
    type: "observation",
    ref: 'Observation',
    obs: "Majority of new students fail safety quiz",
    rec: "Add to controlled documents:<br>safety exam, safety exam answer key",
  },

  {
    type: "observation",
    ref: 'Observation',
    obs: "Introductory class using mixed metal stock",
    rec: "Document consumible life cycle"
  },

  {
    type: "anecdote",
    obs: "&quot;What am I supposed to do, just fix everything?&quot;",
    rec: "Empower teaching staff with confidence<br/>to implement a Safety Management System",
    ref: "Anecdote",
  }
]