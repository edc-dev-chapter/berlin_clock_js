const expect = require('chai').expect;
const berlinClockConverter = require('../src/BerlinClockConverter.js');

describe("clock", () => {
    describe('Single Minutes Row', () => {
        it('should exist', () => {
            expect(berlinClockConverter.getSingleMinutesRow).to.be.exist;
        });

        const testCases = [
            {time: '00:00:00', expected: '0000'},
            {time: '23:59:59', expected: 'YYYY'},
            {time: '12:32:00', expected: 'YY00'},
            {time: '12:34:00', expected: 'YYYY'},
            {time: '12:35:00', expected: '0000'},
        ];
        testCases.forEach(({time, expected}) => {
            it(`it should return ${expected} when ${time} is entered`, () => {
                expect(berlinClockConverter.getSingleMinutesRow(time)).to.be.equal(expected);
            });
        });
    });

    describe("Five Minutes Row", () => {
        it('should exist', () => {
            expect(berlinClockConverter.getFiveMinutesRow).to.be.exist;
        });

        const testCases = [
            {time: '00:00:00', expected: '00000000000'},
            {time: '23:59:59', expected: 'YYRYYRYYRYY'},
            {time: '12:04:00', expected: '00000000000'},
            {time: '12:23:00', expected: 'YYRY0000000'},
            {time: '12:35:00', expected: 'YYRYYRY0000'},
        ];
        testCases.forEach(({time, expected}) => {
            it(`should return ${expected} when ${time}`, () => {
                expect(berlinClockConverter.getFiveMinutesRow(time)).to.be.equal(expected)
            })
        })

    });

    describe('Single hour row', () => {

        const testCases = [
            {time: '00:00:00', expected: '00000000000'},
            {time: '23:59:59', expected: 'YYRYYRYYRYY'},
            {time: '22:04:00', expected: '00000000000'},
            {time: '12:23:00', expected: 'YYRY0000000'},
            {time: '12:35:00', expected: 'YYRYYRY0000'},
        ];

        it('highlight single hour row', () => {
            expect(berlinClockConverter.getSingleHourRow).to.be.exist;
        })
    })
});
