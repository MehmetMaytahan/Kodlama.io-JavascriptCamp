# Kodlama.io Javascript Education Camp Questions and Answers

***

# _Homework_1_

<details close> 
<summary>Question_1 And Answer</summary>

**JavaScript** ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu **fonksiyona** gönderdiğiniz her sayı için çıktı olarak **asal** olup olmadığını yazınız.

```js
function isPrime(...numbers) {
  numbers.map((i) => {
    let counter = 0;
    for (let j = 2; j < i / 2; j++) {
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
isPrime(7, 5, 12);
```
</details>

<details close> 
<summary>Question_2 And Answer</summary>

Parametre olarak girilen iki sayının **arkadaş sayılar** olup olmadığını bulan programı yazınız.

```js
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
```
</details>

<details close> 
<summary>Question_3 And Answer</summary>

1000'e kadarki tüm **mükemmel sayıları** listeleyen programı yazınız.

```js
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
```
</details>

<details close> 
<summary>Question_4 And Answer</summary>

1000'e kadarki tüm **asal sayıları** listeleyen programı yazınız.

```js
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
```
</details>


***

## Contributing

Please open a thread for changes..!

## License

[MIT](https://choosealicense.com/licenses/mit/)
