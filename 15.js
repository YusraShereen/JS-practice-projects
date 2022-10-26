guest_list = ['Alina','Surriya','Summiya','Tayyaba']
console.log('INITIAL INVITATION\n-------------------------------------------------------------------------------\n\n');
for(i=0; i<guest_list.length;i++)
{
    console.log('\nHi '+guest_list[i]+".  You are cordinally invited for dinner at my house.\nTomorrow 9:00 PM");
}

console.log("\nAlina can't make it.");
console.log('\n\nFINAL INVITATION\n-------------------------------------------------------------------------------\n\n');
guest_list[0] = 'Ahmed';

for(i=0; i<guest_list.length;i++)
{
    console.log('\nHi '+guest_list[i]+".  You are cordinally invited for dinner at my house.\nTomorrow 9:00 PM");
}