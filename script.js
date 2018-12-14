const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const median = numbers => {
    numbers.sort( (a, b) => a -b)

    let half = Math.floor(numbers.length/2)

    if (numbers.length % 2) return numbers[half]
    return (numbers[half - 1] + numbers[half]) / 2.0
}

median(numbers)