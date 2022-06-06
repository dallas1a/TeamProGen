const Intern = require('../lib/Intern')
test('creates Intern object', () => {
    const intern = new Intern('Dallas', 717, 'dallas.archer.bailey@gmail.com', 'UCONN');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test('gets school', () => {
    const intern = new Intern('Dallas', 717, 'dallas.archer.bailey@gmail.com', 'UCONN');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('gets role', () => {
    const intern = new Intern('Dallas', 717, 'dallas.archer.bailey@gmail.com', 'UCONN');

    expect(intern.getRole()).toEqual("Intern");
}); 