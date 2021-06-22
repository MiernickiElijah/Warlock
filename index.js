const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer');


const employees = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'Name',
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
    ])
    .then(() => {
        // employees.push(new Manager(Name, employeeNum, email, officeNum));
        menu();
    });

//menu --- Add an Engineer, Add an Intern, Finish Building Team//
function menu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Choose an Employee to add to the team or select done to finish:',
                choices: ['Engineer', 'Intern', 'Done'],
                name: 'title',
            }
        ]).then((res) => {
            role(res.title);
        })
}

function role(title) {
    switch (title) {
        case 'Engineer':
            return createEngineer();
            break;
        case 'Intern':
            return createIntern();
            break;
        case 'Done': finished();
            return
            break;
    }
}

//if engineer is selected then prompt (name, id, email, and github) go back to menu //
function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'Name',
                message: "What is this Team Member's name?",
            },
            {
                type: 'input',
                name: 'idNum',
                message: "What is this Team Member's ID#?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this Team Member's email?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is this Team Member's GitHub Username?",
            },
        ]).then(() => {
            // employees.push(new Engineer(Name, idNum, email, github));
            menu();
        });
}

//if Intern is selected then prompt (name, id, email, and school) go back to menu //
function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'Name',
                message: "What is this Team Member's name?",
            },
            {
                type: 'input',
                name: 'idNum',
                message: "What is this Team Member's ID#?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What school did this Team Member attend?",
            }
        ]).then(() => {
            // employees.push(new Intern(Name, idNum, email, school));
            menu();
        });
}

function finished() {
    const htmlPageContent = generateHTML();
    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    )
}

//index HTML file here//
const generateHTML = () =>
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
                <h1 class="display-4">This is ${Manager.Name}'s Team</h1>
                <h2 class="display-5">Employee ID#${Manager.idNum} | Title: Manager</h2>
                <p class="lead">Office Number: ${Manager.officeNum}.</p>
                <h3>Team Members</h3>
                <span class="badge badge-secondary bg-light"><a href="mailto:${Manager.email}">${Manager.email}</span></a>
    
                <ul class="list-group">
                    <li class="list-group-item">Name: </li>
                    <li class="list-group-item">ID#: </li>
                    <li class="list-group-item">Email: </li>
                    <li class="list-group-item">GitHub/School: </li>
                </ul>

            </div>
        </div>
    </body>
    
    </html>
    `;
