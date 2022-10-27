current_users = ['yusra','amna','alia','fariha','anabia']
new_users = ['YUSRA','AMNA','Maria','Ahmed','Farrukh']

let name_available;

for(i=0;i<new_users.length ; i++)
{
    name_available = true;
    for(j=0;j<current_users.length;j++)
    {
        if(new_users[i].toLowerCase() === current_users[j])
        {
            name_available = false;
            break;
        }
    }
    if(!name_available)
    {        
        console.log('\nUsername already in use. please enter new username');
    }
    else
    {
        console.log('\nUsername available');
    }
}