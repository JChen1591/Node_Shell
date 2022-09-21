//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on(pwd => {
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});

candy apples