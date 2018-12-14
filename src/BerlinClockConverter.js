function getMinutes(timeString) {
    return timeString.split(":")[1];
};

function getHours(timeString) {
    return timeString.split(':')[0];
};
module.exports = {

    getSingleMinutesRow: (timeString) => {
        let result = 'YYYY'
        const minutes = getMinutes(timeString);
        if (minutes % 5 === 0) {
            result = '0000';
        } else if (minutes % 5 === 1) {
            result = 'Y000';
        } else if (minutes % 5 === 2) {
            result = 'YY00';
        } else if (minutes % 5 === 3) {
            result = 'YYY0';
        }
        return result
    },

    getFiveMinutesRow: (time) => {
        const minutes = time.split(":")[1];
        const leftValue = "Y".repeat((minutes / 5) % 12);
        const rightValue = "0".repeat(11 - (leftValue.length));
        const computed = (leftValue + rightValue);
        const highlightEveryThirdLamp = (char, index) => {
            if (char === "Y") {
                return (index % 3 === 2) ? "R" : char;
            }
            return char
        };
        return computed.split('').map(highlightEveryThirdLamp).join("");
    },

    getSingleHourRow: (timeString) => {
        const hours = getHours(timeString);

    }
};