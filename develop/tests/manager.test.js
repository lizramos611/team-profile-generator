const Manager = require('../lib/manager.js');

test('manager role should be returned', () => {
    const test = new Manager('Mike', '403', 'mike123@gmail.com', '101');

    expect((test.getRole()).toBe('101'));
 })

 test('manager office number should be returned', () => {
    const test = new Manager('Mike', '403', 'mike123@gmail.com', '101');

    expect((test.officeNumber()).toBe('101'));
 })

 test('manager email should be returned', () => {
    const test = new Manager('Mike', '403', 'mike123@gmail.com', '101');

    expect((test.getEmail()).toBe('mike123@gmail.com'));
 })

 test('manager id should be returned', () => {
    const test = new Manager('Mike', '403', 'mike123@gmail.com', '101');

    expect((test.getId()).toBe('403'));
 })

 test('manager name should be returned', () => {
    const test = new Manager('Mike', '403', 'mike123@gmail.com', '101');

    expect((test.getName()).toBe('Mike'));
 })




