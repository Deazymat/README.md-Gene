const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
  {
    type: "input",
    name: "projectName",
    message: "Whats the name of the project?",
  },

  {
    type: "input",
    name: "description",
    message: "summary of the project and what it entails:",
  },

  {
    type: "input",
    name: "installation",
    message: "how do the users install this project?",
  },

  {
    type: "input",
    name: "usage",
    message: "provide a usage example:",
  },

  {
    type: "input",
    name: "screenshots",
    message: "enter path to screenshot (if any);",
  },

  {
    type: "input",
    name: "technologies",
    message: "list what technologies/languages used:",
  },

  {
    type: "input",
    name: "contribution",
    message: "how can others help contribute:",
  },

  {
    type: "input",
    name: "testing",
    message: "describe how to test the project:",
  },
  {
    type: "list",
    name: "license",
    message: "choose a license for the project:",
    choices: ["MIT"],
    // add more later when needed//
  },
  {
    type: "input",
    name: "credits",
    message: "list the contributors who helped with the project:",
  },
  {
    type: "input",
    name: "contact",
    message: "provide contact information:",
  },
  {
    type: "input",
    name: "badges",
    message: "list badges (if any):",
  },

  {
    type: "input",
    name: "roadmap",
    message: "describe any improvements that will be added:",
  },
  {
    type: "input",
    name: "faq",
    message: "list questions that could be asked frequently (if any):",
  },
  {
    type: "input",
    name: "acknowledgments",
    message: "type any acknowledgments and thanks?",
  },
  {
    type: "input",
    name: "dependencies",
    message: "list project dependencies:",
  },
];




  // writing the readme file

function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);
      const fileName = "README.md";
      writeToFile(fileName, markdownContent);
      console.log(`${fileName} has been generated successfully!`);
    })
    .catch((error) => {
      console.error("An error occurred during README generation: ", error);
    });
}

init();
