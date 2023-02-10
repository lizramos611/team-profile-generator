//importing inquiring and fs to creat html file
const inquirer = require('inquirer');
const fs = require('fs');

//import generated html file to link two files
const generateHTML = require('./src/generatedHTML.html');


//importing all employee libraries with classes
const Employee = require("./lib/employee");
const Engineer = require("./lib/engingeer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const { type } = require('os');

const newTeamArray = [];


const managerPrompts = () => {
    return inquirer.prompt ([
        {

            type: 'input',
            message: 'Manager: What is your first name?',
            name: 'name',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("please enter your name to continue!");
                    return false;
                }
            }
        },
        {
            type: 'number',
            message: 'What is your employee ID?',
            name: 'employee',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("please enter your employee ID number to continue!");
                    return false;
                }
            }

        },
           
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("please enter your email address to continue!");
                    return false;
                }
            }

        },
        
        {
            type: 'number',
            message: 'What is your office number?',
            name: 'office',
            validate: office => {
                if (office) {
                    return true;
                } else {
                    console.log("please enter your office number to continue!");
                    return false;
                }
            }

        },

            
        
    ])

    .then(mgrInput => {
        const { name, id, email, officeNumber } = mgrInput;
        const mgr = new Manager (name, id, email, officeNumber);
        newTeamArray.push(mgr);
    })
}

const newEmployeeprompts = () => {
return inquirer.prompt([
    {
        type: 'list',
        message: 'What is your role?',
        name: 'role',
        choices: ['Intern', 'Engineer'],
        when: ({role}) => {
            if ({role }) {
                    return true;
        } else {
                    return false;

             }
        }
    },
    
    {

        type: 'input',
        message: 'What is your first name?',
        name: 'name',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("please enter your name to continue!");
                return false;
            }
        }
    },
    {
        type: 'number',
        message: 'What is your employee ID?',
        name: 'employee',
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log("please enter your employee ID number to continue!");
                return false;
            }
        }

    },
       
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("please enter your email address to continue!");
                return false;
            }
        }

    },

    {
        when: (input) => input.role === 'Intern',
        type: 'input',
        message: 'What is your school name?',
        name: 'school',
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log("please enter your school name to continue!");
                return false;
            }
        }
    },
    {
        when: (input) => input.role === 'Engineer',
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("please enter your Github username to continue!");
                return false;
            }
        }
    },


    {
        type: 'confirm',
        message:'Do you need to add more team members at this time?',
        name: 'added'
    },
])


.then(function(input){
    let { name, id, email, role, school, github, added} = input;
    let employee;

    if (role === 'Intern')
})
};

managerPrompts()
.then(newEmployeeprompts);

