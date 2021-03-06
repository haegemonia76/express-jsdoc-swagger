const flatArray = (elements) => {
    let response = [];
    let i = 0;
    while (i < elements.length) {
        const val = elements[i];
        response = response.concat(val);
        i += 1;
    }
    return response;
};

const getIndexBy = (elements, key, value) =>
    elements.findIndex((element) => element[key] === value);

module.exports = {
    flatArray,
    getIndexBy,
};
