function getDays(year, month) {
    const arrayMonth = ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
    if (typeof (year % 1) !== 'number' || year < 0 || year % 1 !== 0) {
        return false;
    }
    if (typeof month === 'string') {
        for (let i = 0; i < arrayMonth.length; i++){
            if (arrayMonth[i] === month) {
                month = i;
            }
        }
    }
    return new Date(year, month, 0).getDate();
}

module.exports = {
    getDays
}
