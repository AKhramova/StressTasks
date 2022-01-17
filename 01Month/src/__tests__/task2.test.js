const { isOdd } = require('../task2');

describe('Task2', function () {
    test('argument is not number', function () {
        expect(isOdd('test')).toBe(false);
    })
    test('number as a string, number is even', function () {
        expect(isOdd(2)).toBe(false);
    })
    test('number is odd', function () {
        expect(isOdd(3)).toBe(true);
    })
})