const Employee = require("./Employee");
//creates engineer object and exports to index.js
class Engineer extends Employee{
    constructor (name, id, email, github) {
        
        super (name, id, email);

        this.github = github; 
    }

   
    getGithub () {
        return this.github;
    }

    
    getRole () {
        return "Engineer";
    }
}
module.exports = Engineer;