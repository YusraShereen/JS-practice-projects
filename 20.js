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