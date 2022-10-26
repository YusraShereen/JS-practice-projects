places  = ['Mecca','Medinah','Istanbul','Anqara','Egypt']

console.log('\nPlaces that I would like to visit\n');
for(i=0;i<places.length;i++)
{
    console.log(places[i]);
}

sorted_places = places.slice().sort()

console.log('\nPlaces that I would like to visit in sorted order\n');
for(i=0;i<sorted_places.length;i++)
{
    console.log(sorted_places[i]);
}

console.log('\nPlaces that I would like to visit Unsorted\n');
for(i=0;i<places.length;i++)
{
    console.log(places[i]);
}

console.log('\nPlaces that I would like to visit in reverse order\n');
for(i=places.length-1;i>=0;i--)
{
    console.log(places[i]);
}

console.log('\nPlaces that I would like to visit in orignal order\n');
for(i=0;i<places.length;i++)
{
    console.log(places[i]);
}

places = places.reverse();
console.log('\nPlaces that I would like to visit in reverse\n');
for(i=0;i<places.length;i++)
{
    console.log(places[i]);
}

places = places.reverse();
console.log('\nPlaces that I would like to visit in orignal order(again reverse)\n');
for(i=0;i<places.length;i++)
{
    console.log(places[i]);
}

places.sort()
console.log('\nPlaces that I would like to visit in sorted\n');
for(i=0;i<places.length;i++)
{
    console.log(places[i]);
}
