# Ignorant CLI
An ES6 project creator for ignorant people :sunglasses:

### Installing
````
  npm install --global ignorant-cli
````

### Usage
Navigate to your desired directory using a command promt or terminal and execute the following command:
````
  ignorant create <projectName>
````
where `<projectName>` is, as you can guess, the name of your project. This should create a new project in the current folder you are in and install the necessary dependencies. Then navigate to your project directory and start the project:
````
  cd <projectName> && npm start
````

### Deploy
To get a deployeble version of your app, execute the following. 
````
  npm run build
````
This will create a `dist` folder in the project root where you can find `index.html`, `main.js` (minified) and `main.js.map`. Happy deploying!