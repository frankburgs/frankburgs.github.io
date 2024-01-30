// The images column is hidden from print via Bootstrap.
// The rules in print.css should work after the following:

// Clear class attributes from each element
Array.from(document.querySelectorAll('.widget.hover')).forEach(
  (el) => el.removeAttribute('class')
);
// Assign any necessary class attributes

// Run window.print()