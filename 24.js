// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array

let fname = 'Yusra';
let lname = 'Shereen'

console.log('\nIs fname === lname? I predict False')
console.log(fname === lname)

console.log("\nIs fname == 'Yusra'? I predict True")
console.log(fname == 'Yusra')

//--lower case function test
console.log('\nIs fname.toLowerCase() === "Yusra"? I predict False')
console.log(fname.toLowerCase() === 'Yusra')

console.log("\nIs fname.toLowerCase() == 'yusra'? I predict True")
console.log(fname.toLowerCase() == 'yusra')

//--Numerical tests
console.log("\nIs 5 < 6'? I predict True.")
console.log(5 < 6)
console.log("\nIs 15 < 6'? I predict False.")
console.log(15 < 6)

console.log("\nIs 15 > 6'? I predict True.")
console.log(15 > 6)
console.log("\nIs 5 > 6'? I predict False.")
console.log(5 > 6)

console.log("\nIs 6 <= 6'? I predict True.")
console.log(6 <= 6)
console.log("\nIs 15 <= 6'? I predict False.")
console.log(15 <= 6)

console.log("\nIs 15 >= 6'? I predict True.")
console.log(15 >= 6)
console.log("\nIs 5 >= 6'? I predict False.")
console.log(5 >= 6)

console.log("\nIs 6 == 6'? I predict True.")
console.log(6 == 6)
console.log("\nIs 15 === 6'? I predict False.")
console.log(15 === 6)

console.log("\nIs 5 != 6'? I predict True.")
console.log(5 != 6)
console.log("\nIs 6 != 6'? I predict False.")
console.log(6 != 6)

//---logical operations test
console.log('\nIs fname == "Yusra" && lname === "Shereen"? I predict True');
console.log(fname == "Yusra" && lname === "Shereen")
console.log('\nIs fname == "Yusra" && lname != "Shereen"? I predict False');
console.log(fname == "Yusra" && lname != "Shereen")

console.log('\nIs fname == "Yusra" || lname === "Shereen"? I predict True');
console.log(fname == "Yusra" || lname === "Shereen")
console.log('\nIs fname == "Yusra" || lname != "Shereen"? I predict True');
console.log(fname == "Yusra" || lname != "Shereen")
console.log('\nIs fname == "Y" || lname == "Shereen"? I predict True');
console.log(fname == "Y" || lname == "Shereen")
console.log('\nIs fname === "Y" || lname === "S"? I predict False');
console.log(fname === "" || lname === "S")
