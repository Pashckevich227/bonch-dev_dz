const typeConversionWithCase = (num) =>
{
    //проверка, евляется ли число num целым
    if (Number.isInteger(num)) {
        switch (num) 
        {
            case 5:     return "пять"
            case 13:    return "тринадцать"
            case 22:    return "двадцать два"
            case 35:    return "тридцать пять"          
            case 98:    return "девяносто восемь"

            default: return num;
        }
    }
    return 'Введите целое число';
}

console.log(typeConversionWithCase(1));
console.log(typeConversionWithCase(5));
console.log(typeConversionWithCase(13));
console.log(typeConversionWithCase(22));
console.log(typeConversionWithCase(35));
console.log(typeConversionWithCase(98));
console.log(typeConversionWithCase(100));