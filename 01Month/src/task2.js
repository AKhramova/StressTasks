Number.prototype.isOdd = function (value) {
    if (typeof value !== 'number') {
        return false;
    }
    return value % 2 !== 0;
}

module.exports = {
    isOdd: Number.prototype.isOdd
}
