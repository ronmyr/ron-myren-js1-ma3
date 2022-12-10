//Question 1

// function getRemainder(a,b) {
//     return a % b;
//     }

(a, b) => {
    return a % b;
}

const fetchRemainder = (a, b) => {
    const remainder = a % b;
    
    return remainder;
}
console.log(fetchRemainder(2, 6));
// Two different ways writting arrow function