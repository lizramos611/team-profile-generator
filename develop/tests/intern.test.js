const Intern = require('../lib/intern.js');

test('intern role should be returned', () => {
    const test = new Intern('Jack', '202', 'jack777@gmail.com', 'UCF');

    expect(test.getRole()).toBe('Intern');
 })

 test('intern name should be returned', () => {
    const test = new Intern('Jack', '202', 'jack777@gmail.com', 'UCF');

    expect(test.getName()).toBe('Jack');
 })

 test('intern id should be returned', () => {
    const test = new Intern('Jack', '202', 'jack777@gmail.com', 'UCF');

    expect(test.getId()).toBe('202');
 })

 test('intern email should be returned', () => {
    const test = new Intern('Jack', '202', 'jack777@gmail.com', 'UCF');

    expect(test.getEmail()).toBe('jack777@gmail.com');
 })

 test('intern school should be returned', () => {
    const test = new Intern('Jack', '202', 'jack777@gmail.com', 'UCF');

    expect(test.getSchool()).toBe('UCF');
 })
 