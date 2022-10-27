function check_age(age){
    if(age < 2)
    {
        console.log('\nYou are a baby');
    }
    else if(age >= 2 && age <4)
    {
        console.log('\n You are a toddler');
    }
    else if(age >= 4 && age <13)
    {
        console.log('\nYou are a kid');
    }
    else if(age >=13 && age < 20)
    {
        console.log('\n You are teenager');
    }
    else if(age >= 20 && age < 65)
    {
        console.log('\nYou are an adult');
    }
    else
        console.log('\nYou are elder');
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\n\nPlease enter your age: ', function (age) {
    check_age(Number(age));
    rl.close();
  });


