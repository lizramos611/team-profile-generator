
//function to generate and connect the user input with temperate literals

//manager section and data pulled from user input
const createManager = function (manager) {
    return `
   
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${manager.name}</h5>
              <p class="card-text"> ${manager.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">id: ${manager.id}</li>
              <li class="list-group-item">email:<a href="mailto:${manager.email}"> ${manager.email}</a></li>
              <li class="list-group-item">office number: ${manager.officeNumber}</li>
            </ul>
            <div class="card-body">
            </div>
          </div>
    `;
}

//engineer data from user input
const createEngineer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.name}</h5>
          <p class="card-text">${engineer.getRole()} </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">id: ${engineer.id}</li>
          <li class="list-group-item">email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
          <li class="list-group-item">github:<a href="https://github.com/"${engineer.getGithub()}"> ${engineer.getGithub()} </a></li>
        </ul>
        <div class="card-body">
        </div>
      </div>
    
    `
}



//intern data from user input
const createIntern = function (intern) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.name}</h5>
          <p class="card-text">${intern.getRole()} </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">id: ${intern.id}</li>
          <li class="list-group-item">email: <a href="mailto:${intern.email}">${intern.email}</a></li>
          <li class="list-group-item">school: ${intern.getSchool()}</li>
        </ul>
        <div class="card-body">
        </div>
      </div>
    
    `
}


//taking the data from the html page and running a loop to gather all roles
generateHTML = (data) =>{

    htmlPage = [];

    for(let i = 0; i < data.length; i++){
        const employee = data[i];
        console.log(employee.getRole());
        const role = employee.getRole();
        

        if (role === 'Intern'){
            const Intern = createIntern(employee);

            htmlPage.push(Intern);
        }

        if (role === 'Engineer') {
            const Engineer = createEngineer(employee);
            
            htmlPage.push(Engineer);
        }

        if (role === 'Manager') {
            const Manager = createManager(employee);

            htmlPage.push(Manager);
        }
    }
//putting all the data from user input together to generate on the html page
    const employeePage = htmlPage.join('');

    const generatedTeam = createTeam(employeePage);
    return generatedTeam;

}
//entire page generated for new HTMl 
const createTeam = function (employeePage) {
    return`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header class="header">My Team</header>
    <section class="allcards">
    ${employeePage}
      
    
   
   
      </div>
    
    </section>
    </body>
    </html>

    
    
    
    `;
}

//importing the html page

module.exports = generateHTML;