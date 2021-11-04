function perfectNumber(number) {
    for (let i = 2; i < number; i++) {
        var total = 0
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                total+=j
            }
        }
        if (total === i*2) {
            console.log(`${i} is perfect number`)
        }
    }
}
perfectNumber(1000)