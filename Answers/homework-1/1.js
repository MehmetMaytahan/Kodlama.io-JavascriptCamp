function isPrime(...numbers) {
  numbers.map((i) => {
    let counter = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        counter++;
      }
    }
    if (counter == 0) {
      console.log(`${i} is Prime`);
    } else {
      console.log(`${i} isn't Prime`);
    }
  });
}
isPrime(7, 5, 12, 11, 21);
