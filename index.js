// display message
function interpret(code) {
    console.log(`Message: ${code}`);
    return `Message: ${code}`;
}

// add 2 numbers
function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.error('Both arguments must be numbers.');
        return 'Both arguments must be numbers.';
    }
    const sum = parseFloat(a) + parseFloat(b);
    console.log(`Sum: ${sum}`);
    return `Sum: ${sum}`;
}

// reverse string
function reverse(text) {
    if (typeof text !== 'string') {
        console.error('Input must be a string.');
        return 'Input must be a string.';
    }
    const reversed = text.split('').reverse().join('');
    console.log(`Reversed: ${reversed}`);
    return `Reversed: ${reversed}`;
}

module.exports = { interpret, add, reverse };