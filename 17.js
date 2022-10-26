guest_list = ['Alina','Surriya','Summiya','Tayyaba']

console.log("\nAlina can't make it.");
console.log('\n\nInitial Invitation\n-------------------------------------------------------------------------------\n\n');
guest_list[0] = 'Ahmed';

for(i=0; i<guest_list.length;i++)
{
    console.log('\nHi '+guest_list[i]+".  You are cordinally invited for dinner at my house.\nTomorrow 9:00 PM");
}

console.log('\n\nGuys we got a bigger table so now we are inviting 3 more friends\n');

guest_list.splice(0,0,'Farrukh'); // at start
guest_list.splice(3,0,'Anabia'); // at mid
guest_list.push('Waqas'); // at the end

console.log('\n\nFinal Invitation\n-------------------------------------------------------------------------------\n\n');

for(i=0; i<guest_list.length;i++)
{
    console.log('\nHi '+guest_list[i]+".  You are cordinally invited for dinner at my house.\nTomorrow 9:00 PM");
}

console.log("\n\nYour requested table won't arrive in time so please adjust your guest list to only 2 people\nThank you\n\n ");

for(i=guest_list.length-1; i>=2;i--)
{
    name = guest_list.pop();
    console.log('\nDear '+name+",\nSorry we can't invite you to dinner tomorrow. We will soon arrange another party. Take care ");
}

console.log('\n\nFinal Invitation\n-------------------------------------------------------------------------------\n\n');

for(i=0; i<guest_list.length;i++)
{
    console.log('\nHi '+guest_list[i]+".  You are cordinally invited for dinner at my house.\nTomorrow 9:00 PM");
}
guest_list.pop();
guest_list.pop();

for(i=0; i<guest_list.length;i++)
{
    console.log("\nIs there something?"+guest_list[i]);
}
