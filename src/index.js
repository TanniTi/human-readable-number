module.exports = function toReadable (number) {
   const str_hungred = 'hundred';
   //from 0 to 19
   const str_units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
   'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   //from 20 to 90
   const str_dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   arr_number = String(number).split("");

   if (number < 20){
       return str_units[number];
   }

   if ((number >= 20) && (number < 100)){
        if (number%10 == 0){
            return str_dozens[arr_number[0]-2];
        }
    return (str_dozens[arr_number[0]-2]) + ' ' + str_units[arr_number[1]];
   }

   if (number >= 100){

    if((arr_number[1] == '1') || (arr_number[1] == '0')){
        if ((number%100) == 0){
            return str_units[arr_number[0]] + ' ' + str_hungred;
        }
        
        return str_units[arr_number[0]] + ' ' + str_hungred + ' ' +str_units[+(arr_number[1]+arr_number[2])];
    }

       if ((number%10) == 0){
        return str_units[arr_number[0]] + ' ' + str_hungred + ' ' + str_dozens[arr_number[1]-2];
    }
    return str_units[arr_number[0]] + ' ' + str_hungred + ' ' + str_dozens[arr_number[1]-2] + ' ' + str_units[arr_number[2]];


   }
}
