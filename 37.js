function make_shirt(size="Large", text_to_print="I love Javascript")
{
    console.log(`\nSize of shirt is ${size} and text to print is "${text_to_print}"`);
}

// -- call with large size(default) and default msg
make_shirt()

//--call with medium size and default msg
make_shirt("Medium")

//--call with different size and msg
let size = "small";
let text = "Pakistan Zindabad";

make_shirt(size,text)
