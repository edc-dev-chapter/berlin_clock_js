const expect = require('chai').expect;
const berlinClockConverter = require('../src/berlin-clock-converter.js');


describe('Berlin Clock Kata', () => {
    describe('single minutes row', () => {
        // given
        const testCases = [
            {time: '00:00:00', expected: 'OOOO'},
            {time: '03:11:19', expected: 'YOOO'},
            {time: '12:32:45', expected: 'YYOO'},
            {time: '12:33:00', expected: 'YYYO'},
            {time: '12:34:22', expected: 'YYYY'},
            {time: '12:35:00', expected: 'OOOO'},
            {time: '12:36:00', expected: 'YOOO'},
            {time: '12:37:13', expected: 'YYOO'},
            {time: '12:38:00', expected: 'YYYO'},
            {time: '23:59:59', expected: 'YYYY'},
        ];

        testCases.forEach(({time, expected}) => {
            it(`should convert ${time} to ${expected}`, () => {
                // when
                const result = berlinClockConverter.getSingleMinutesRow(time);
                // then
                expect(result).to.equal(expected);
            });
        });
    });

    describe('five minutes row', () => {
        // given
        const testCases = [
            {time: '00:00:00', expected: 'OOOOOOOOOOO'},
            {time: '12:04:00', expected: 'OOOOOOOOOOO'},
            {time: '23:59:59', expected: 'YYRYYRYYRYY'},
            {time: '12:23:00', expected: 'YYRYOOOOOOO'},
            {time: '12:35:00', expected: 'YYRYYRYOOOO'},
        ];

        testCases.forEach(({time, expected}) => {
            it(`should convert ${time} to ${expected}`, () => {
                // when
                const result = berlinClockConverter.getFiveMinutesRow(time);
                // then
                expect(result).to.equal(expected);
            });
        });
    });

    describe('single hours row', () => {
        // given
        const testCases = [
            {time: '00:00:00', expected: 'OOOO'},
            {time: '23:59:59', expected: 'RRRO'},
            {time: '02:04:00', expected: 'RROO'},
            {time: '08:23:00', expected: 'RRRO'},
            {time: '14:35:00', expected: 'RRRR'},
        ];

        testCases.forEach(({time, expected}) => {
            it(`should convert ${time} to ${expected}`, () => {
                // when
                const result = berlinClockConverter.getSingleHourRow(time);
                // then
                expect(result).to.equal(expected);
            });
        });
    });

    describe('five hours row', () => {
        // given
        const testCases = [
            {time: '00:00:00', expected: 'OOOO'},
            {time: '23:59:59', expected: 'RRRR'},
            {time: '02:04:00', expected: 'OOOO'},
            {time: '08:23:00', expected: 'ROOO'},
            {time: '16:35:00', expected: 'RRRO'},
        ];

        testCases.forEach(({time, expected}) => {
            it(`should convert ${time} to ${expected}`, () => {
                // when
                const result = berlinClockConverter.getFiveHoursRow(time);
                // then
                expect(result).to.equal(expected);
            });
        });
    });

    describe('seconds lamp', () => {
        // given
        const testCases = [
            {time: '00:00:00', expected: 'Y'},
            {time: '00:00:01', expected: 'O'},
            {time: '00:00:02', expected: 'Y'},
            {time: '10:11:02', expected: 'Y'},
            {time: '10:11:36', expected: 'Y'},
            {time: '10:11:37', expected: 'O'},
            {time: '23:59:59', expected: 'O'},
        ];

        testCases.forEach(({time, expected}) => {
            it(`should convert ${time} to ${expected}`, () => {
                // when
                const result = berlinClockConverter.getSecondsLamp(time);
                // then
                expect(result).to.equal(expected);
            });
        })
    });

    describe('berlin time', () => {
        // given
        const testCases = [
            {time: '00:00:00', expected: 'YOOOOOOOOOOOOOOOOOOOOOOO'},
            {time: '23:59:59', expected: 'ORRRRRRROYYRYYRYYRYYYYYY'},
            {time: '16:50:06', expected: 'YRRROROOOYYRYYRYYRYOOOOO'},
            {time: '11:37:01', expected: 'ORROOROOOYYRYYRYOOOOYYOO'},
        ];

        testCases.forEach(({time, expected}) => {
            it(`should convert ${time} to ${expected}`, () => {
                // when
                const result = berlinClockConverter.toBerlinTime(time);
                // then
                expect(result).to.equal(expected);
            });
        })
    });
});
