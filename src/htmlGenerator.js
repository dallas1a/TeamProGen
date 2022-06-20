//Creates engineer card html and styles css with bootstrap and style.css pulling from index.js

const createManagerCard = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="fa-solid fa-clipboard"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

//Creates engineer card html and styles css with bootstrap and style.css pulling from index.js

const createEngineerCard = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="fa-solid fa-gears"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

//Creates intern card HTML and styles css with bootstrap and style.css pulling from index.js
const createInternCard = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="fa-solid fa-clipboard-question"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

// Pushes array to html page filling in information for role selected from the index  
createLayoutHTML = (data) => {


    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();



        if (role === 'Manager') {
            const managerCard = createManagerCard(employee);

            pageArray.push(managerCard);
        }


        if (role === 'Engineer') {
            const engineerCard = createEngineerCard(employee);

            pageArray.push(engineerCard);
        }


        if (role === 'Intern') {
            const internCard = createInternCard(employee);

            pageArray.push(internCard);
        }

    }

    const employeeCards = pageArray.join('')

    //uses array to fill the Team page and generate the html for the team
    const createTeamLayout = generateTeamPage(employeeCards);
    return createTeamLayout;

}

//creates general html for the array to push to 
const generateTeamPage = function (employeeCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Page</title>
      
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/6b36750820.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="style.css" />
  </head>
  <body>
      <header class="container-fluid>
          <nav class="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center bg-primary">Team Profile Page</span>
          </nav>
      </header>
      <main>
          <div class="container-fluid bg-secondary">
              <div class="row justify-content-center" >
                
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

// exports the created HTML to index.html in src
module.exports = createLayoutHTML; 