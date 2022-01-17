const { every } = require('../task3');

describe('Task3', function () {
    test('first argument is not array', function () {
        expect(every('test', function (num) {
            return num % 2 === 0;
        })).toBe(false);
    })
    test('array is empty', function () {
        expect(every([], function (num) {
            return num % 2 === 0;
        })).toBe(false);
    })
    test('correct answer, true', function () {
        expect(every([8, 2, 4], function (num) {
            return num % 2 === 0;
        })).toBe(true);
    })
    test('correct answer, false', function () {
        expect(every([1, 2, 4], function (num) {
            return num % 2 === 0;
        })).toBe(false);
    })
})