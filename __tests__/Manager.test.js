const Manager = require('../lib/Manager')
test('creates Manager object', () => {
    const manager = new Manager('Dallas', 717, 'dallas.archer.bailey@gmail.com', 1004);
    
    expect(manager.officeNum) .toEqual(expect.any(Number));
});



test('gets role', () => {
    const manager = new Manager('Dallas', 717, 'dallas.archer.bailey@gmail.com', 1004);

    expect(manager.getRole()).toEqual("Manager");
}); 