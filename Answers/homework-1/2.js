function friendNumbers(...numbers) {
  let total = 0;
  let check = true;
  numbers.map((i) => {
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        total += j
      }
    }
    if (total === numbers[1]) {
      console.log(`${numbers[0]} - ${numbers[1]} are Friend Numbers `);
      check = false
    }else if(check){
      console.log(`${numbers[0]} - ${numbers[1]} aren't Friend Numbers `)
    }
  });
}
friendNumbers(17296, 18416);
