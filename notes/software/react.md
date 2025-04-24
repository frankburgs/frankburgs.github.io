``` jsx
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}
// or...
function Avatar({ person, size = 100 }) { // Default value of 100.
  // ...
}
// Repetitive example
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
```