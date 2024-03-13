const array = [-12, "A", 4, "V", -9, "B", 101, -99];

// Separate numbers and characters
const characters = array.filter(element => typeof element === 'string');
const numbers = array.filter(element => typeof element === 'number');

// Sort the character array
characters.sort();
// Sort the number array
numbers.sort((a, b) => a - b);


// Concatenate the sorted arrays
const sortedArray = characters.concat(numbers);
console.log(sortedArray);

