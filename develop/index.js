//importing inquiring and fs to creat html file
const inquirer = require('inquirer');
const fs = require('fs');

//import generated html file to link two files
const generateHTML = require('./src/generatedHTML.js');


//importing all employee libraries with classes
const Employee = require("./lib/employee");
const Engineer = require("./lib/engingeer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const { type } = require('os');


//array that will hold all the team members from the inquirer prompts
const newTeamArray = [];

//prompt questions for manager first
const managerPrompts = () => {
    return inquirer.prompt ([
        {
//manager name
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

//manager employee id
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
           
//manager email address
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
        

//manager office number
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


//imported manager class that is linked to the inputs from inquirer
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        newTeamArray.push(manager);
    })
}


//intern or engingeer prompts
const newEmployeeprompts = () => {
return inquirer.prompt([

//selection for eningeer or intern
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
    

//first name for engineer/ intern
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

//employee id for engineer/intern
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
       

//email address for engineer/ intern
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

    //if intern selected, it will ask the school name
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

//if engineer selected, it will ask for their github username
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

//confirm whether or not to add more team members
    {
        type: 'confirm',
        message:'Do you need to add more team members at this time?',
        name: 'added'
    },
])


.then(function(input){
    let { name, id, email, role, school, github, added} = input;
    let employee;

    if (role === 'Intern') {
        employee = new Intern (name, id, email, school);
    }
    if (role === 'Engingeer') {
        employee = new Engineer (name, id, email, github);
    }
    newTeamArray.push(employee);
    if (added) 
    {
        return newEmployeeprompts(newTeamArray);

    }
    else {
        return newTeamArray;
    }
})
};
const writeFile = data => {
    fs.writeFile("./src/index.html", data, err => {
        if (err) {
            console.error(err)
        }
        else {
            console.log("Success!")
        }
    })};


managerPrompts()
.then(newEmployeeprompts)
.then(function(newTeamArray){
    return generateHTML(newTeamArray)

})
.then(function(html){
    return writeFile(html);
})
