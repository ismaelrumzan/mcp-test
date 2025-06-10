#!/usr/bin/env node

// Get numbers from command line arguments
const numbers = process.argv.slice(2).map(Number);

// Check if we have valid numbers
if (numbers.length === 0) {
  console.log('Please provide numbers to add');
  process.exit(1);
}

// Check if all arguments are valid numbers
if (numbers.some(isNaN)) {
  console.log('Please provide valid numbers');
  process.exit(1);
}

// Add all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(`Sum: ${sum}`); 