# Setup Vite/React/TWCSS

``` shell
npm create vite@latest # Follow Vite setup for React.
npm i # Install dependencies.
npm run dev # Check.
npm install tailwindcss @tailwindcss/vite # Follow TWCSS steps for Vite.
```

- Add following to existing .js

``` js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

- Add @import "tailwindcss"; to an imported .css file.

- Create folder /config and move eslint & vite config files, update scripts as below.

``` js
{
  "scripts": {
    "dev": "vite --config ./config/vite.config.js",
    "build": "vite build --config ./config/vite.config.js",
    "lint": "eslint --config ./config/eslint.config.js .",
  }
}
```