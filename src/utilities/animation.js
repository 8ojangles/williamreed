const delay = 200;

function isNumber(value) {
    return typeof value === 'number';
}

function calculateDelay(i) {

    if (!isNumber(i) || i < 0) {
        console.log('Invalid parameter, returning default delay');
        return delay;
    }

    return i === 0 ? 1 * delay : i * delay;
}

export { calculateDelay };