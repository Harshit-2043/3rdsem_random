// exports.sum = function sum() {
//     return 2 + 4;
// };

// exports.multiply = function multiply() {
//     return 2 * 3;
// };

exports.fahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
};

exports.Celsius = (fahrenheit)=> {
    return (fahrenheit - 32) * 5 / 9;
};