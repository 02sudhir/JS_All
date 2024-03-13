const array = [-12, 33, 4, 0, -9, -2, 101, -99];

for(i=0;i< array.length-1;i++)
{
    for(j=0;j< array.length-1;j++)
    {
        if(array[j]  > array[ j +1])
        {
            const temp =array[j];
            array[j] = array[j+1];
            array[j+1] =temp;
        }
    }
}

console.log(array);