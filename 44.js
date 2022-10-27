function make_sandwich(items_on_sandwich)
{
    let sandwich="This sandwich includes ";

    for(i=0; i<items_on_sandwich.length;i++)
    {
        sandwich +=items_on_sandwich[i]+" ";
    }

    console.log('\nOrdered Sandwich:\n'+sandwich);
}

make_sandwich(['BBQ'])
make_sandwich(['veggie','cheese'])
make_sandwich(['egg','cheese','veggie'])