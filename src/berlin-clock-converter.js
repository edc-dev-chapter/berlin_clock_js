module.exports = {
    toBerlinTime,
    getSingleMinutesRow,
    getFiveMinutesRow,
    getSingleHourRow,
    getFiveHoursRow,
    getSecondsLamp
};

function toBerlinTime(time) {
    return getSecondsLamp(time)
        + getFiveHoursRow(time)
        + getSingleHourRow(time)
        + getFiveMinutesRow(time)
        + getSingleMinutesRow(time);
}

function getSingleMinutesRow(time) {
    const minutes = time.split(':')[1];
    const allLamps = 4;
    const minutesIntervalForAllLamps = 5;
    const lampsToLight = minutes % minutesIntervalForAllLamps;

    return lightLamps(lampsToLight, allLamps);
}

function getFiveMinutesRow(time) {
    const minutes = time.split(':')[1];
    const allLamps = 11;
    const lampsToLight = Math.floor(minutes / 5);

    const modifyEveryThird = (element, index) => index % 3 === 2 ? 'R' : element;

    return lightLamps(lampsToLight, allLamps, 'Y', 'O', modifyEveryThird);
}

function getSingleHourRow(time) {
    const hours = time.split(':')[0];
    const allLamps = 4;
    const lampsToLight = hours % 5;

    return lightLamps(lampsToLight, allLamps, 'R');
}

function getFiveHoursRow(time) {
    const hours = time.split(':')[0];
    const allLamps = 4;
    const lampsToLight = Math.floor(hours / 5);

    return lightLamps(lampsToLight, allLamps, 'R');
}

function getSecondsLamp(time) {
    const seconds = time.split(':')[2];
    const allLamps = 1;
    const lampsToLight = seconds % 2 === 0 ? 1 : 0;
    return lightLamps(lampsToLight, allLamps)
}

function lightLamps(toLight, allLamps, color = 'Y', empty = 'O', colorModification) {
    const emptyLamps = empty.repeat(allLamps - toLight);
    let lightedLamps = color.repeat(toLight);

    if (colorModification) {
        lightedLamps = lightedLamps.split('').map(colorModification).join('');
    }

    return lightedLamps + emptyLamps
}