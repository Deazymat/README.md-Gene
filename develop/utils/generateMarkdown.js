// utils/generateMarkdown.js
function getBadgeUrl(licenseName) {
  const licenseBadgeUrls = {
    MIT: "https://img.shields.io/badge/License-MIT-yellow.svg",
    "Apache 2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    "GPL 3.0": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    // Add more licenses as needed
  };
  return licenseBadgeUrls[licenseName] || "";
}

function generateLicenseBadge(licenseName) {
  const badgeUrl = getBadgeUrl(licenseName);
  if (badgeUrl) {
    return `![License: ${licenseName}](${badgeUrl})`;
  }
  return "";
}

function generateMarkdown(answers) {
  const licenseBadge = generateLicenseBadge(answers.license_name);

  return `
# ${answers.project_title}
${licenseBadge}

## Description
${answers.project_description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${answers.installation_instructions}
\`\`\`

## Usage
${answers.usage_instructions}

## Contributing
${answers.contribution_guidelines}

## License
This project is licensed under the ${answers.license_name} license.

## Tests
\`\`\`
${answers.test_instructions}
\`\`\`

## Questions
For any questions or inquiries, please reach out to me:
- **GitHub**: [${answers.your_name}](https://github.com/${answers.your_name})
- **Email**: [${answers.your_email}](mailto:${answers.your_email})
`;
}

module.exports = generateMarkdown;
