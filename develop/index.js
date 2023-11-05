// Importing required modules
const fs = require("fs"); // File system module to work with the file system on your computer.
const inquirer = require("inquirer"); // A collection of common interactive command line user interfaces.
const path = require("path"); // The Path module provides a way of working with directories and file paths.
const generateMarkdown = require("./utils/generateMarkdown"); // Custom module to generate markdown.

  // Array of questions for user input
const questions = [
  {
    type: "input",
    name: "project_title",
    message: "What's the name of the project?",
  },
  {
    type: "input",
    name: "project_description",
    message: "What does the project do, and why is it useful?",
  },
  {
    type: "input",
    name: "installation_instructions", // 
    message: "How can you install the project?",
  },
  {
    type: "input",
    name: "usage_instructions", 
    message: "How is the project used?",
  },

  {
    type: "input",
    name: "technologies", 
    message: "List what technologies/languages are used:",
  },
  {
    type: "input",
    name: "contribution_guidelines", 
    message: "How can others help contribute?",
  },
  {
    type: "input",
    name: "test_instructions",
    message: "Describe how to test the project:",
  },
  {
    type: "list",
    name: "license_name",
    message: "Choose a license for the project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0"],
  },
  {
    type: "input",
    name: "your_name", 
    message: "List the contributors who helped with the project:",
  },
  {
    type: "input",
    name: "your_email",
    message: "Provide contact information:",
  },
];
// writing the readme file

// Function to write data to a file
function writeToFile(fileName, data) {
  // Use the writeFileSync method from the fs module to write data to a file
  // path.join is used to create a file path that is compatible with the OS
  // process.cwd() is used to get the current working directory
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize the application
function init() {
  // Use the prompt method from the inquirer module to present the questions to the user
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the markdown content using the answers provided by the user
      const markdownContent = generateMarkdown(answers);
      // Define the name of the file to write to
      const fileName = "README.md";
      // Write the generated markdown content to the file
      writeToFile(fileName, markdownContent);
      // Log a success message to the console
      console.log(`${fileName} has been generated successfully!`);
    })
    .catch((error) => {
      // Log any errors that occur during the execution of the promise
      console.error("An error occurred during README generation: ", error);
    });
}

// Call the init function to start the application
init();
