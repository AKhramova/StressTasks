const { getDays } = require('../task1');

describe('Task1, year is not correct', function () {
    test.each([
        ['test', 0, false],
        [-1, 0, false],
        [2000.5, 0, false]
    ])('testing arguments %s %s with expected result %s', function (year, month, result) {
        expect(getDays(year, month)).toBe(result);
    })
});

describe('Task1, correct answer', function () {
    test.each([
        [2021, 4, 30],
        [2021, 'April', 30],
        [2020, 'February', 29],
        [2020, 2, 29],
        [2022, 'February', 28],
        [2022, 2, 28],
    ])('testing arguments %s %s with expected result %s', function (year, month, result) {
        expect(getDays(year, month)).toBe(result);
    })
});
