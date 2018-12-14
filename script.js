const numbers = [12341, -111, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000, -1234]

const maxValue = arrayOfNumbers => {
    const arrayOfMaxValues = arrayOfNumbers.sort((a, b) => b - a)
    const maxValue = arrayOfMaxValues[0]
    return maxValue
}

maxValue(numbers)