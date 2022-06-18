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
        message: 'Provide a short description explaining the what, why, and how of the project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use of your application.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'If you want other developers to contribute to your application, include detailed guidelines for how to do so.',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'If tests were performed on your application, provide examples here.',
        name: 'tests'
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
