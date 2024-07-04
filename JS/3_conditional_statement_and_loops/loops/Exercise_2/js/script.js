let a;
for(a=0;a<=10;a++)
{
    if(a>5)
    {
        break;
        
    }
    if (a % 2 !== 0) 
    {
        continue; // This will skip the current iteration if n is odd
    }

    document.write(a + '<br>');
}