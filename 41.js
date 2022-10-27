function show_magicians(magicians_names)
{
    for(i=0; i<magicians_names.length; i++)
    {
        console.log(`\n\t${magicians_names[i]}`);
    }
}

mag_names = ['Abc','Bcd','Def','Ghi']

show_magicians(mag_names)