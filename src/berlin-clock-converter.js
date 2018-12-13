module.exports = {
    toBerlinTime,
    getSingleMinutesRow,
    getFiveMinutesRow,
    getSingleHourRow,
    getFiveHoursRow,
    getSecondsLamp
};

const Color = {
    OFF: 'O',
    YELLOW: 'Y',
    RED: 'R'
};

class Row {
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }
}

const fiveMinutesRow = new Row(11, Color.YELLOW);
const singleMinuteRow = new Row(4, Color.YELLOW);
const secondsRow = new Row(1, Color.YELLOW);
const singleHourRow = new Row(4, Color.RED);
const fiveHoursRow = new Row(4, Color.RED);

function toBerlinTime(time) {
    return getSecondsLamp(time)
        + getFiveHoursRow(time)
        + getSingleHourRow(time)
        + getFiveMinutesRow(time)
        + getSingleMinutesRow(time);
}

function getSingleMinutesRow(time) {
    const minutes = time.split(':')[1];
    const lampsToLight = minutes % 5;

    return lightLamps(lampsToLight, singleMinuteRow);
}

function getFiveMinutesRow(time) {
    const minutes = time.split(':')[1];
    const lampsToLight = Math.floor(minutes / 5);

    return lightLamps(lampsToLight, fiveMinutesRow).replace(/YYY/g, 'YYR')
}

function getSingleHourRow(time) {
    const hours = time.split(':')[0];
    const lampsToLight = hours % 5;

    return lightLamps(lampsToLight, singleHourRow);
}

function getFiveHoursRow(time) {
    const hours = time.split(':')[0];
    const lampsToLight = Math.floor(hours / 5);

    return lightLamps(lampsToLight, fiveHoursRow);
}

function getSecondsLamp(time) {
    const seconds = time.split(':')[2];
    const lampsToLight = 1 - seconds % 2;
    return lightLamps(lampsToLight, secondsRow)
}


function lightLamps(toLight, row) {
    const emptyLamps = Color.OFF.repeat(row.size - toLight);
    const lightedLamps = row.color.repeat(toLight);

    return lightedLamps + emptyLamps
}
