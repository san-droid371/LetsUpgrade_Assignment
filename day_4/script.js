const printTable=(num)=>{
    //for loop 
    for(let i=1; i<=10; i++)
    {
        console.log(`${num} X ${i} = ${num*i}`);
    }
}
const num= prompt('Enter a number:');
printTable(num);