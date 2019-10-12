const path = require('path');
const fs = require('fs-extra');
const replace = require('replace');
const cp = require('child_process');
const connectivity = require('connectivity');

const createProject = (projectName) => {
  const projectCreationPath = path.resolve('', projectName);
  const templatePath = path.resolve(__dirname, '../', 'template');

  if (!(fs.existsSync(path.resolve(projectCreationPath)))) {
    // allow program to copy the template files
    fs.copy(
      templatePath,
      projectCreationPath,
      (err) => {
        if (err) {
          console.log("Error in fs.copy() !! \n " + err);
          return;
        } else {
          replace({
            regex: "<your-project-name>",
            replacement: projectName,
            paths: [
              path.resolve(projectCreationPath, 'package.json'),
              path.resolve(projectCreationPath, 'indexTemplate.html'),
              path.resolve(projectCreationPath, 'README.md'),
            ],
            recursive: true,
            silent: true
          });
          console.log('')
          console.log('')
          console.log(`Project is being created...`);
          console.log('')

          connectivity((online) => {
            if (online) {
              doNpmInstall()
            } else {
              console.log('---------------------------------------------------------')
              console.log('Looks like your internet connection is not working.');
              console.log('The project is created. But the dependencies are not installed.');
              console.log('')
              console.log('Once your internet is back,');
              console.log('-  Navigate to the project directory, install the dependencies and run the project:')
              console.log('')
              console.log(`       cd ./${projectName}`)
              console.log(`       npm install`)
              console.log(`       npm start`)
              console.log('')
              console.log(`Your app will then be served at http://localhost:8080`)
              console.log('Happy hacking!')
            }
          })

          doNpmInstall = () => {
            const msg = cp.execSync(
              `cd ./${projectName} && npm install`,
              { encoding: 'utf-8' }
            )
            console.log('')
            console.log(msg)
            console.log('---------------------------------------------------------')
            console.log('Creation completed! Now,')
            console.log('')
            console.log('-  Navigate to the project directory and run the project:')
            console.log('')
            console.log(`       cd ./${projectName}`)
            console.log(`       npm start`)
            console.log('')
            console.log(`Your app will then be served at http://localhost:8080`)
            console.log('Happy hacking!')
            console.log('')
            console.log('')
          }
        }
      }
    );
  } else {
    console.log('')
    console.log('')
    console.log(`Oops!`);
    console.log(`A directory named ${projectName} already exists in the path ${path.resolve('')}`);
    console.log('')
    console.log('')
  }
}

module.exports = {
  createProject
}
