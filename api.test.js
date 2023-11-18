const { describe, it, expect } = require("@jest/globals");
const carValue = require("./api");
const currentYear = new Date().getFullYear();

describe('API tests', () => {
    // TEST 1 - correct inputs
    it(`should return 6600 when Model: Civic and Year: 2000`, () => {
        const carModel = "Civic";
        const carYear = 2000;
        const expected = 6600;

        const actual = carValue(carModel, carYear);

        expect(actual).toBe(expected);
    });

    // TEST 2 - number input for model
    it(`should return 2016 when Model: 911 and Year: 2016`, () => {
        const carModel = 911;
        const carYear = 2016;
        const expected = 2016;

        const actual = carValue(carModel, carYear);

        expect(actual).toBe(expected);
    });

    // TEST 3 - negative and out of range number for year
    it(`should return error message: number out of range`, () => {
        const carModel = "Swift";
        const carYear = -1000;

        expect(() => carValue(carModel, carYear)).toThrow(`Car year must be a number smaller than ${currentYear} and bigger than 1885`);
    });
});


    // TEST 4 - string for year
    it(`should return error message: year has to be provided in numbers`, () => {
        const carModel = "Roadmaster";
        const carYear = "Nineteen Fifty Two";

        expect(() => carValue(carModel, carYear)).toThrow(`Car year must be provided in numbers, e.g. 1990`);
    });


    // TEST 5 - blank input
    it(`should return error message: fields cannot be empty`, () => {
        const carModel = "";
        const carYear = 2016;

        expect(() => carValue(carModel, carYear)).toThrow(`Fields cannot be empty`);
    });