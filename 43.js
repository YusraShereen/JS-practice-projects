function show_magicians(magicians_names)
{
    for(i=0; i<magicians_names.length; i++)
    {
        console.log(`\n  ${magicians_names[i]}`);
    }
}

function make_great(magicians_names)
{
    let mag_names = magicians_names;

    for(i=0; i<mag_names.length; i++)
    {
        mag_names[i]="Great "+mag_names[i];
    }

    return mag_names;
}

let mag_names = ['Abc','Bcd','Def','Ghi']

//------------------orignal names
console.log('\n----------------------Orignal Names:-------------------\n');
show_magicians(mag_names);

//---------------------Modified names
console.log('\n---------------------Modified Names:-------------------\n');
let ret_names = make_great(mag_names)
show_magicians(ret_names)