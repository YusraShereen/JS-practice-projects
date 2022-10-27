function make_album(artistName, albumTitle, numberOfTracks=null)
{
    let obj;
    
    if(numberOfTracks != null)
    {
        obj= {
            artist_name: artistName,
            album_title: albumTitle,
            number_of_tracks:numberOfTracks
        }
    }
    else
    {
        obj = {
            artist_name: artistName,
            album_title: albumTitle
        }
    }
    return obj;
}
let ret_obj1 = make_album('Junaid Jamshed','Jalwa Jana')
let k = Object.keys(ret_obj1)

console.log(k.length)

console.log("\n1st Object---------------------------------------------------")
for(i=0;i<k.length; i++)
{
    console.log(`\n${k[i]}: ${ret_obj1[k[i]]}`);
} 
console.log("\n2nd Object---------------------------------------------------")
let ret_obj2 = make_album('Atif Aslam','ABC')
k= Object.keys(ret_obj2)
for(i=0; i<k.length ; i++)
{
    console.log(`\n${k[i]}: ${ret_obj2[k[i]]}`);
}

console.log("\n3rd Object---------------------------------------------------")
let ret_obj3 = make_album('Anas Younus','XYZ')
k= Object.keys(ret_obj3)
for(i=0; i<k.length ; i++)
{
    console.log(`\n${k[i]}: ${ret_obj3[k[i]]}`);
}

console.log("\n4th Object with optional parameter---------------------------------------------------")
let ret_obj4 = make_album('Junaid Jamshed','DEF',4)
k= Object.keys(ret_obj4)
for(i=0; i<k.length ; i++)
{
    console.log(`\n${k[i]}: ${ret_obj4[k[i]]}`);
}
