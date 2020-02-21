exports.min = function min(array = []) {
    if (!array.length) {
        return 0;
    } else {
        return Math.min(...array);
    }
};

exports.max = function max(array = []) {
    if (!array.length) {
        return 0;
    } else {
        return Math.max(...array);
    }
};

exports.avg = function avg(array = []) {
    let total;
    let minus = 0;
    let plus = 0;
    if (!array.length) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 0) {
                minus += array[i];
            } else {
                plus += array[i];
            }
        }
        total = (minus + plus) / array.length;
    }
    return total;
};
