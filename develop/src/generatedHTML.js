

const createManager = function (manager) {
    return `
   
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">name</h5>
              <p class="card-text">${manager.name}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">id: ${manager.id}</li>
              <li class="list-group-item">email: ${manager.email}</li>
              <li class="list-group-item">office number: ${manager.officeNumber}</li>
            </ul>
            <div class="card-body">
            </div>
          </div>
    `;
}


const creatEngingeer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.name}</h5>
          <p class="card-text">job </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">id: ${engineer.id}</li>
          <li class="list-group-item">email: ${engineer.email}</li>
          <li class="list-group-item">github: ${engineer.github}</li>
        </ul>
        <div class="card-body">
        </div>
      </div>
    
    `
}

const createIntern = function (intern) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.name}</h5>
          <p class="card-text">job </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">id: ${inter.id}</li>
          <li class="list-group-item">email: ${intern.email}</li>
          <li class="list-group-item">school: ${intern.school}</li>
        </ul>
        <div class="card-body">
        </div>
      </div>
    
    `
}

generateHTML = (data) =>{

    htmlPage = [];

    for(let i = 0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole();
        

        if (role === 'Intern'){
            const Intern = createIntern(employee);

            htmlPage.push(Intern);
        }

        if (role === 'Engineer') {
            const Engineer = createEngineer(employee);
            htmlPage.push (employee);
        }

        if (role === 'Manager') {
            const Manager = createManager(employee);

            htmlPage.push(employee);
        }
    }

    const employeePage = htmlPage.join('');

    const generatedTeam = createTeam(employeePage);
    return generatedTeam;

}

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
createManager()
module.exports = generateHTML;