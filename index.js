const inquirer = require('inquirer');
const fs = require('fs');

function role(title) {
    switch (title) {
        case 'Engineer':
            return
            break;
        case 'Intern':
            return
            break;
        case 'Done':
            return
            break;
    }
}

//copy paste index HTML file here//
const generateHTML = (answers) =>
    `
    `;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Team Managers name?',
        },
        {
            type: 'input',
            name: 'employeeNum',
            message: 'What is your Employee ID#?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is your office number?',
        },
        //menu --- Add an Engineer, Add an Intern, Finish Building Team//
        {
            type: 'list',
            message: 'Choose an Employee to add to the team:',
            choices: ['Engineer', 'Intern', 'Done'],
            name: 'title',
        },
        //when engineer is selected then prompt (name, id, email, and github) go back to menu //
        {
            type: 'input',
            name: 'engineerName',
            message: "What is this Team Member's name?",
        },
        {
            type: 'input',
            name: 'idNum',
            message: "What is this Team Member's ID#?",
        },
        {
            type: 'input',
            name: 'githubUN',
            message: "What is this Team Member's GitHub Username?",
        },
        //when Intern is selected then prompt (name, id, email, and school) go back to menu //
        {
            type: 'input',
            name: 'internName',
            message: "What is this Team Member's name?",
        },
        {
            type: 'input',
            name: 'idNum',
            message: "What is this Team Member's ID#?",
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What school did this Team Member attend?",
        },
    ])


    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
