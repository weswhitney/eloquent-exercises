numbers = 1
while (numbers <= 100) {
  if (numbers % 3 == 0 && numbers % 5 == 0) {
    console.log('FizzBuzz');
  } else if (numbers % 3 == 0) {
    console.log('Fizz');
  } else if (numbers % 5 == 0) {
    console.log('Buzz');
  } else {
  console.log(numbers);
  }
  numbers++;
}
