function getMultiples(number) {
    let multiplesArray = [];
    for (let i = number; i <= 100; i++) {
        if (i % number == 0) {
            multiplesArray.push(i);
        }
    }
    return multiplesArray
}

console.log(getMultiples(99));