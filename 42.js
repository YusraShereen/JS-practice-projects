function show_magicians(magicians_names)
{
    for(i=0; i<magicians_names.length; i++)
    {
        console.log(`\n\t${magicians_names[i]}`);
    }
}

function make_great(magicians_names)
{
    for(i=0; i<magicians_names.length; i++)
    {
        magicians_names[i]="Great"+magicians_names[i];
    }
}

mag_names = ['Abc','Bcd','Def','Ghi']

make_great(mag_names)
show_magicians(mag_names)