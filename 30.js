let usernames = ['admin','Yusra','Shereen','Summiya']

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