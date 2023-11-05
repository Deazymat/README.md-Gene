// utils/generateMarkdown.js
function getBadgeUrl(licenseName) {
  // Object mapping license names to their respective badge URLs
  const licenseBadgeUrls = {
    MIT: "https://img.shields.io/badge/License-MIT-yellow.svg",
    "Apache 2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    "GPL 3.0": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    // Add more licenses as needed
  };
  // Return the badge URL for the given license name, or an empty string if the license is not found
  return licenseBadgeUrls[licenseName] || "";
}

// Function to generate the markdown for the license badge
function generateLicenseBadge(licenseName) {
  // Get the URL for the license badge
  const badgeUrl = getBadgeUrl(licenseName);
  // If the badge URL exists, return the markdown for the badge
  if (badgeUrl) {
    return `![License: ${licenseName}](${badgeUrl})`;
  }
  // If the badge URL does not exist, return an empty string
  return "";
}

// Function to generate the markdown for the README
function generateMarkdown(answers) {
  // Generate the markdown for the license badge
  const licenseBadge = generateLicenseBadge(answers.license_name);

  // Return the complete markdown for the README
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
