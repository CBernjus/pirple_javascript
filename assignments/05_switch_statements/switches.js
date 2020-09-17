// Homework Assignment #5 - Switch Statements

// possible units
const units = [
    "day",
    "days",
    "hour",
    "hours",
    "minute",
    "minutes",
    "second",
    "seconds",
];
const convertingFactors = [86400, 3600, 60, 1];

function checkArguments(value1, label1, value2, label2) {
    for (let i = 1; i < arguments.length; i += 2) {
        const value = arguments[i - 1];
        const label = arguments[i];
        if (
            !Number.isInteger(value) ||
            typeof label !== "string" ||
            (value == 1 && label.endsWith("s")) ||
            !label.endsWith("s")
        )
            return false;
    }

    return true;
}

function convertToSeconds(value, label) {
    switch (label) {
        case units[0]:
        case units[1]:
            value *= convertingFactors[0];
            break;
        case units[2]:
        case units[3]:
            value *= convertingFactors[1];
            break;
        case units[4]:
        case units[5]:
            value *= convertingFactors[2];
            break;
    }
    return value;
}

function convertToIntTime(seconds) {
    for (let i = convertingFactors.length - 1; i > 0; i--) {
        let converted = seconds / convertingFactors[i];
        if (Number.isInteger(converted))
            time = [
                converted,
                converted === 1 ? units[2 * i] : units[2 * i + 1],
            ];
    }
    return time;
}

function timeAdder(value1, label1, value2, label2) {
    if (!checkArguments(value1, label1, value2, label2)) return false;

    let seconds1 = convertToSeconds(value1, label1);
    let seconds2 = convertToSeconds(value2, label2);

    return convertToIntTime(seconds1 + seconds2);
}
