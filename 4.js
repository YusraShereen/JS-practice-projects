const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\n\nWhat is Author name? ', function (famous_person) {
  rl.question('What is their quote ? ', function (quote) {
    console.log(`\n\n${famous_person} once said, " ${quote}"`);
    rl.close();
  });
});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});