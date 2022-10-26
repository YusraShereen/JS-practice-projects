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
