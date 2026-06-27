module.exports = function (operator, a, b) {
    switch (operator) {
        case 'plus':
            return a + b;
        case 'minus':
            return a - b;
        case 'divide':
            return a / b;
    }
};
