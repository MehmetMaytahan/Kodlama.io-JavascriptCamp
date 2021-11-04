function listPerfectNumbers(limit) {
    for (let i = 2; i < limit; i++) {
        let counter = 0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                counter++;
            }
        }
        if (counter === 0) {
            console.log(`${i} is Prime`);
        }
    }
}
listPerfectNumbers(1000)