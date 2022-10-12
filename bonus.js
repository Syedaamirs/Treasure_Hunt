let array = [230, 150, 500, 120, 600, 950, 1001];

array.sort((a, b) => {
    return a - b;
})


array.sort((a, b) => {
    return b - a;
})

console.log(array);