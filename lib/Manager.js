const Employee = require("./Employee");
//creates manager object and exports to index.js
class Manager extends Employee{
    constructor (name, id, email, officeNum) {
        
        super (name, id, email);

        this.officeNum = officeNum; 
    }
    getOfficeNum () {
        return this.officeNum;
    }

    getRole () {
        return "Manager";
    }
}
module.exports = Manager;