name = 'YUsra Shereen';

console.log(name.toUpperCase())
console.log(name.toLowerCase())
name = name.toLowerCase()
arr = name.split(' ');
name = '';

for(i=0; i<arr.length;i++)
{
    name+=arr[i].charAt(0).toUpperCase() + arr[i].slice(1)+" ";
}
console.log(name);