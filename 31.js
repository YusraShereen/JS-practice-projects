let usernames = ['admin','Yusra','Shereen','Summiya']

function displayUserNames(usernames){
    if(usernames.length)
    {
        for(i=0;i<usernames.length;i++)
        {
            if(usernames[i]==='admin')
            {
                console.log(`\nHello ${usernames[i]}, would you like to see a status report?`);
            }
            else
            {
                console.log(`\nHello ${usernames[i]}, thanks for logging in again`);
            }
        }
    }
    else
    {
        console.log('\nWe need to find some users!');
    }

}

//---test case: list not empty
console.log('\n----------------------------Test case 1----------------------------\n')
displayUserNames(usernames)

//----test case: empty list
usernames = []
console.log('\n----------------------------Test case 2----------------------------\n')
displayUserNames(usernames)