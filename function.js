const summator = (sum) =>
{
    if (Number.isInteger(sum)) 
    {
         for(let i=1; i <= sum; i++)
        {
            
            for (let char of "s")
            {
                switch (i) 
                {                
                case 5:     i++; console.log("пять"); break;
                case 13:    i++; console.log("тринадцать"); break;
                case 22:    i++; console.log("двадцать два"); break;
                case 35:    i++; console.log("тридцать пять"); break;   
                case 98:    i++; console.log("девяносто восемь"); break;
                }
            } 
            console.log(i);
        }    
    }
    else
    {
     console.log('Введите целое число!');
    }
   
    return "Программа работает корректно";
}

console.log(summator(100));




