// Homework Assignment  # 6 - Loops

// highest number to check
const n = 100;

// list of primes initialization
// entry resembles a prime if primes[i] = 1
let primes = Array(n + 1)
    .fill(false)
    .fill(true, 2);

// simple prime sieve
for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2 * i; j < n + 1; j += i) {
        primes[j] = false;
    }
}

// fizz buzz prime
for (let i = 1; i < primes.length; i++) {
    let output = "";
    if (i % 3 == 0) output += "Fizz";
    if (i % 5 == 0) output += "Buzz";
    if (primes[i]) output += "Prime";
    if (output == "") output += i;
    console.log(output);
}
