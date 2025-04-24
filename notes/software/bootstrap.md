[Setup](#setup)
[Notes](#notes)

# Setup

``` shell
npm create vite # React option
npm i bootstrap
```

- Insert into index.html

``` html
<head>
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.css">
</head>
<body></body>
<script src="./node_modules/bootstrap/dist/js/bootstrap.js"></script> 
```

- Either bootstrap.bundle.js or run npm i @popperjs/core -- save and link it to project somehow.


# Notes

- You can set sizing using row and col with specifiers, or percentages.

- img-fluid