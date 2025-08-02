<h1 align="center">
  AI Customer Service Agent
</h1>



https://github.com/user-attachments/assets/85160d67-af2c-49f5-a5fc-8920dca92385
<p align="center">
  Short demo showing addition and deletion of items.
</p>




<p align="center">
  This academic project is an AI-powered customer service agent that takes customer orders for a restaurant. This provides an alternate method for consumers to
  place their orders from the standard navigation and selection on a menu on a website to a more condensed environment with minimal navigation.
  The restaurant used is Firehouse Subs.
</p>

### Project Link:

### Project Information/Deck (Description, Tech Stack / Architecture, Samples):
<a href="https://docs.google.com/presentation/d/1e9AlpY5lH-8D3dd7GKj6qA3PvKaBqb-jO3ozBjhT8nY/edit? usp=sharing" target="_blank" rel="noopenner referrer"/>
https://docs.google.com/presentation/d/1e9AlpY5lH-8D3dd7GKj6qA3PvKaBqb-jO3ozBjhT8nY/edit?usp=sharing
</a>


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
