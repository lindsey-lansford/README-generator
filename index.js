// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle'
    },
    {
        type: 'input',
        message: 'Give a description of your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubName'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },

];

// TODO: Create a function to write README file
function writeToFile(data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            const userInput = generateMarkdown(response)
            console.log(userInput)
    })
}

// Function call to initialize app
init();
