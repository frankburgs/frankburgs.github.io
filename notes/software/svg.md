- [To-do](#to-do)
- [First-time](#first-time)

# To-do
- Use svg in jsx
- mousetrap
- Cat in worn flowing robes (console)
- elbow tendon extension stretch

# First-time
- -> Edit - Preferences - Interface (main)
- User Interface handle size to max.
- -> Toolbars
- 2x icon sizes to max.

## Dark mode
- -> File - Document Properties - Display
- Both Page & Desk -> choose black (L) from HSL.
- File -> Save Template & set as default

## First shape
- Select text and a shape, -> Text -> Flow into frame.
- Set a fill color and an opacity to zero to make it clickable.
- C&P the SVG element into your HTML, no img, or object, etc.

# FX
- Stack multiple differently blurred lines with center white top for neon.
``` css
filter: blur(5px);
```


# Editor
- Right click anywhere : menu options
- Right click tool icon : more options
- Hold shift + click tools : alternate function
- Click object twice : swap manipulation tool


# Notes
- Write svg delimiter line locations at bottom of files if unable to reference externally.
- Trace simpler images to convert to svg or use tools.
- Modifying width, height, and stroke may change the other values as well.
- Use smallest font size and build from there.
- Go for the simplest visual interpretation with the fewest lines and build.


## Print
- Tailwind has a stroke-width utility, try to convert color of all items in the svg to black for printing, as well as reducing stroke-width to reduce ink usage.
- Use print-none for legend.

## Sanitization
- Delete ?xml element before the svg element.
- Delete sodipodi:nameview element.