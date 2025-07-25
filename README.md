<h1 align="center">
  AI Customer Service Agent
</h1>

<p align="center">
  This academic project is an AI-powered customer service agent that takes customer orders for a restaurant. This provides an alternate method for consumers to
  place their orders from the standard navigation and selection on a menu on a website to a more condensed environment with minimal navigation.
  The restaurant used is Firehouse Subs.
</p>

### Project Link:

### Project Information (Description, Tech Stack / Architecture, Samples):


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 1) Install the Gemini API
```
pip install google-generativeai
```

### 2) Tailwind
```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

npx tailwindcss init -p
```

Create the ./src/index.css file and use the @tailwind directive to include Tailwind’s base, components, and utilities styles, replacing the original file contents:
```
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ensure your CSS file is being imported in your ./src/main.js file:
```
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
```

### 3) Install Dependencies
```
npm install
```

### 4) Compiles and hot-reloads for development
cd into the **frontend** directory and run the following command:
```
npm run serve
```

### 4.5) Compiles and minifies for production
```
npm run build
```

### 5) Run the Server
```
node server
```
OR
```
node server.js
```
