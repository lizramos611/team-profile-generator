const Employee = require('../lib/employee.js');

test('employee name should be returned', () => {
    const test = new Employee('Joe', '38', 'joe14@gmail.com');

    expect(test.getName()).toBe('Joe');
 })

 test('employee id should be returned', () => {
    const test = new Employee('Joe', '38', 'joe14@gmail.com');

    expect(test.getId()).toBe('38');
 })

 test('employee email should be returned', () => {
    const test = new Employee('Joe', '202', 'joe14@gmail.com');

    expect(test.getEmail()).toBe('joe14@gmail.com');
 })
 test('employee role should be returned', () => {
    const test = new Employee('Joe', '202', 'joe14@gmail.com');

    expect(test.getRole()).toBe('Employee');
 })
