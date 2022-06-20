// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === ''){
    return "";
  } else {
    return "- [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let nameLicense;
  if (license === '') {
    return "";
  } else if (license === '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)')
  {
    nameLicense = "Boost";
  }
    return `## License
    This project is licensed under ${nameLicense} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${data.license}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributions](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## How to Contribute

${data.contribution}

## Tests

${data.tests}

## Questions

Please reach out with any questions you may have about this application.

* :octocat: GitHub: [@${data.githubName}](https://github.com/${data.githubName})
* :envelope: Email: ${data.email}`;
}

module.exports = generateMarkdown;
