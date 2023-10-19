
function renderLicenseBadge(license) {
  if (license !== "none") {
    return ``;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "none") {
    return `/n* [license](#license)/n`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "none")
    return `## License
            Licensed under the ${license} license.`;
}
return "";

// Writing the readme file

function generateMarkdown(data) {
  return `# ${data.projectName}
${data.description}

    ## Installation

${data.installation}
    ## Usage

${data.usage}
    ## Screenshots
    ![Screenshots](${data.screenshots})

    ## Technologies Used
${data.technologies}

    ## Contribution
${data.contribution}

    ## Testing
${data.testing}


${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

    ## Credits
${data.credits}

    ## Contact
${data.contact}

    ## Badges
${data.badges}

    ## Roadmap
${data.roadmap}

    ## FAQ
${data.faq}

    ## Acknowledgments
${data.acknowledgments}

    ## Dependencies
${data.dependencies}

`;
}
module.exports = questions;
