const Engineer = require('../lib/engineer.js');

test('engineer role should be returned', () => {
    const test = new Engineer('Bob', '54', 'bob92@aol.com', 'bob127');

    expect(test.getRole()).toBe('Engineer');
 })
 test('engineer name should be returned', () => {
    const test = new Engineer('Bob', '54', 'bob92@aol.com', 'bob127');

    expect(test.getName()).toBe('Bob');
 })

 test('engineer id should be returned', () => {
    const test = new Engineer('Bob', '54', 'bob92@aol.com', 'bob127');

    expect(test.getId()).toBe('54');
 })

 test('engineer email should be returned', () => {
    const test = new Engineer('Bob', '54', 'bob92@aol.com', 'bob127');

    expect(test.getEmail()).toBe('bob92@aol.com');
 })

 test('engineer github username should be returned', () => {
    const test = new Engineer('Bob', '54', 'bob92@aol.com', 'bob127');

    expect(test.getGithub()).toBe('bob127');
 })
