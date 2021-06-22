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

function Engineer(name, id, email, github) {
    this.name = {
        name: name,
    };
    this.id = id;
    this.email = email;
    this.github = github;

    this.card = function () {
        ;
    };
}

function Intern(name, id, email, school) {
    this.name = {
        name: name,
    };
    this.id = id;
    this.email = email;
    this.school = school;

    this.card = function () {
        ;
    };
}

//copy paste index HTML file here//
const generateHTML = (answers) =>
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Team</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">This is ${answers.name}'s Team</h1>
                <h2 class="display-5">Employee ID#${answers.employeeNum} | Title: Manager</h2>
                <p class="lead">Office Number: ${answers.officeNum}.</p>
                <h3>Team Members</h3>
                <span class="badge badge-secondary bg-light"><a href="mailto:${answers.email}">${answers.email}</span></a>
    
                <ul class="list-group">
                    <li class="list-group-item">${answers.engineerName}</li>
                    <li class="list-group-item">${role(answers.title)}</li>
                    <li class="list-group-item">${answers.idNum}</li>
                    <li class="list-group-item">My GitHub username is ${answers.githubUN}</li>
                </ul>
            </div>
        </div>
    </body>
    
    </html>
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

        //if engineer is selected then prompt (name, id, email, and github) go back to menu //
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

        //if Intern is selected then prompt (name, id, email, and school) go back to menu //
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
