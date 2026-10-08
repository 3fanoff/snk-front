module.exports = function (arg, type) {
    if (Array.isArray(arg)) {
        return 'array' === type;
    }
    return typeof arg === type;
};
