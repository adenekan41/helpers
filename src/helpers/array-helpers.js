export const arrayRandomItem = (array) => {
    return array[Math.random() * array.length | 0];
}
export const arrayPickOne = (array, index) => {
    return array.splice(index >= 0 ? index : Math.random() * array.length | 0, 1)[0];
}

export const arrayShuffleItems = (array) => {
    for (var i = array.length; i > 0; --i)
        array.push(array.splice(Math.random() * i | 0, 1)[0]);
    return array;
}
