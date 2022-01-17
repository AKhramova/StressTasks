function every(array, callback) {
    let result = true;
    if (!Array.isArray(array)) {
        return false;
    }
    if (array.length === 0) {
        return false;
    }
    array.forEach((elem) => {
        result = result && callback(elem);
    })

    return result;
}

module.exports = {
    every
}