// Packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown.js')


// An array of questions for user input
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
        message: 'What are the steps required to install your project?\n- Provide a step-by-step description of how to get the development environment running.',
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
    {
        type: 'list',
        message: 'Choose a license for your application from the list below, or choose to add your own later.',
        name: 'license',
        choices: [
            {
                name: 'Boost',
                value: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
            },
            {
                name: 'MIT',
                value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            },
            {
                name: 'IBM',
                value: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
            },
            {
                name: 'Mozilla',
                value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
            },
            {
                name: 'Apache',
                value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            },
            {
                name: 'None',
                value: '',
            }
        ]
    }
];

//Function that creates README file(with user responses) & initializes app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            const userInput = generateMarkdown(response)
            console.log(userInput)
            fs.writeFileSync('README.md', userInput, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Your README file has been created successfully.')
                } 
                })
    })
}

// Function call to initialize app
init();
