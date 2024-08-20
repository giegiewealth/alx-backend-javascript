/**
 * Reads from STDIN argument.
 *
 */

// Output the initial message to the user
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Event listener for readable event on stdin
process.stdin.on('readable', () => {
  // Read the input from stdin
  const name = process.stdin.read();

  // If there is an input, output the user's name
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Event listener for end event on stdin
process.stdin.on('end', () => {
  // Output the closing message
  process.stdout.write('This important software is now closing\n');
});
