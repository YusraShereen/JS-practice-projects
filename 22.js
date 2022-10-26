let student = {
    name: 'Yusra Shereen',
    age: 22,
    batch: 38,
    course: 'Web 3.0 & metaverse developer',
    education: 'Bachelors'
}

k = Object.keys(student);

for(i=0;i<k.length;i++)
{
    console.log(`\nStudent's ${k[i]}: ${student[k[i]]}`);
}
cars = ['vigo','corolla','city','BMW']
cities = ['Karachi','Islamabad']
languages = ['Urdu','English','Chinese']

list = []
list.push(cars)
list.push(cities)
list.push(languages)

for(i=0;i<list.length;i++)
{
    console.log('\n\n------------------------New List------------------------------------\n')
    for(j=0;j<list[i].length;j++)
    {
        console.log(list[i][j]);
    }
}


//------------------------------------------------------------------------------------
//intentional error
//console.log(cars[4])// index out of range error
console.log(cars[3])