// Javascript that multiplies two numbers by using loops.

// Variable setting.
let i = parseInt(0)
let result = parseInt(0)

// Prompts, which retrieve the 2 numbers needed.
alert('This webpage multiplies two numbers together.')
let x = parseInt(prompt('What is your first number?'))
let y = parseInt(prompt('What is your second number?'))

// Changes both x and y to positive if they are both negative.
if (x < 0 && y < 0) {
  x = Math.abs(x)
  y = Math.abs(y)
}

// Changes the variable y to a positive if it's negative.
if (y < 0 ) {
  y = Math.abs(y)
  x = -Math.abs(x)
}

// Loop that adds the value of x whatever the value of y times.
for (i = parseInt(0); i < y; i++) {
  result = result + x
}

// Tells the user the product of their two numbers.
alert('The product is ' + result + '.')
