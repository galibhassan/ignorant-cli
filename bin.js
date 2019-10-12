#!/usr/bin/env node
const program = require('commander');
const createProject = require('./src/createProject').createProject;

program
  .command(`create <projectName>`)
  .action((projectName) => {
    projectName = projectName.toLowerCase();
    createProject(projectName);
  }).on('--help', function(){
    console.log('on help')
  });

program.parse(process.argv);
