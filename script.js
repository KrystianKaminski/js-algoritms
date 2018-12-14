const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const calcAverage = (arrayOfNumbers) => {
    return arrayOfNumbers.reduce((reduced, element, index, array) => {
        const sum = reduced + element / array.length
        return sum
    }, 0)
}

console.log(calcAverage(numbers))