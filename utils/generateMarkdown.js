//This function returns the license link, that the user selected, in the table of contents; If there is no license, returns an empty string.
function renderLicenseLink(license) {
  if (license === ''){
    return "";
  } else {
    return "- [License](#license)";
  }
}

//This function returns the license section of README; If there is no license, returns an empty string.
function renderLicenseSection(license) {
  let nameLicense;
  if (license === '') {
    return "";
  }
  else if (license === '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)') {
    nameLicense = "MIT";
    return `## License
    This project is licensed under ${nameLicense} license.`
  }
  else if (license === '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)') {
    nameLicense = "Boost";
    return `## License
    This project is licensed under ${nameLicense} license.`
  }
  else if (license === '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)') {
    nameLicense = "IBM";
    return `## License
    This project is licensed under ${nameLicense} license.`
  }
  else if (license === '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)') {
    nameLicense = "Mozilla";
    return `## License
    This project is licensed under ${nameLicense} license.`
  }
  else if (license === '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)') {
    nameLicense = "Apache";
    return `## License
    This project is licensed under ${nameLicense} license.`
  }
};

//This function generates the markdown README file.
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
