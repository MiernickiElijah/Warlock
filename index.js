const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer');

let employees = [];
let plebs = '';
let currentEmployee;

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
    ])
    .then((res) => {
        let manager = new Manager(res.name, res.employeeNum, res.email, res.officeNum);
        employees.push(manager);
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
                name: 'name',
                message: "What is this Team Member's name?",
            },
            {
                type: 'input',
                name: 'id',
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
        ]).then((res) => {
            currentEmployee = new Engineer(res.name, res.id, res.email, res.github);
            plebs +=
                `<div class="card">
                <img class="card-img-top" src="../assets/images/developer.png" alt="Card image cap">
                    <div class="card-block">
                        <h4 class="card-title">${res.name}</h4>
                        <p class="card-text">
                            Engineer - <i class="fas fa-id-card-alt"></i>ID# ${res.id}
                        </p>
                        <p class="card-text"><a class="contactLink" href="mailto:${res.email}"><i
                            class="contact fas fa-inbox fa-lg i"></i>${res.email}</a></p>
                        <p class="card-text"><a class="contactLink" href="https://github.com/${res.github}" target="_blank"><i
                            class="contact fab fa-github fa-lg i"></i>GitHub: ${res.github}</a></p>
                    </div>
                </div>`;
            menu();
        });
}

//if Intern is selected then prompt (name, id, email, and school) go back to menu //
function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this Team Member's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is this Team Member's ID#?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this Team Member's email?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What school did this Team Member attend?",
            }
        ]).then((res) => {
            currentEmployee = new Intern(res.name, res.id, res.email, res.school);
            plebs += `
            <div class="card">
                <img class="card-img-top" src="../assets/images/intern.png" alt="Card image cap">
                    <div class="card-block">
                        <h4 class="card-title">${res.name}</h4>
                        <p class="card-text">
                            Engineer - <i class="fas fa-id-card-alt"></i>ID# ${res.id}
                        </p>
                        <p class="card-text"><a class="contactLink" href="mailto:${res.email}"><i
                            class="contact fas fa-inbox fa-lg i"></i>${res.email}</a></p>
                        <p class="card-text"><i class="fas fa-school"></i>College: ${res.school}</p>
                    </div>
            </div>`;
            menu();
        });
}

function finished() {
    const htmlPageContent = generateHTML();
    fs.writeFile('../Warlock/dist/index.html', htmlPageContent, (err) =>
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
                            <link href="../assets/fontawesome/css/all.css" rel="stylesheet">
                                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
                                        <title>Team</title>
    </head>
                                    <body>
                                        <div class="jumbotron jumbotron-fluid">
                                            <div class="container">
                                                <h1 class="display-1">This is ${employees[0].name}'s Team</h1>
                                                <h2 class="display-3">Title: Manager  |  <i class="fas fa-id-card-alt"></i>ID#${employees[0].id}</h2>
                                                <h4 class="lead">Office Number: ${employees[0].officeNum}.</h4>
                                                <span class="badge badge-secondary bg-light"><a href="mailto:${employees[0].email}"<i
                                                class="contact fas fa-inbox fa-lg i">${employees[0].email}</span></i></a>
                                            </div>
                                        </div>
                                        <h3>Team Members</h3>
                                        <div class="card-deck">
                                            ${plebs}
                                        </div>
                                    </body>
    </html>`;