function filterByParamRange(arr, param, min, max) {
    return arr.filter((obj) => {
        return obj.hasOwnProperty(param) && obj[param] >= min && obj[param] <= max;
    });
}

function filterByParamValue(arr, param, value) {
    return arr.filter((obj) => {
        return obj.hasOwnProperty(param) && Array.isArray(obj[param]) && obj[param].includes(value);
    });
}

export { filterByParamRange, filterByParamValue };