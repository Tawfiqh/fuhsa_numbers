// https://stackoverflow.com/a/52089026


//English to Persian digits.
function EntoFa(inputString) {
    return inputString.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])
}
  
//English to Arabic digits.
function EntoAr(inputString) {
    return inputString.replace(/\d/g, d =>  '٠١٢٣٤٥٦٧٨٩'[d])
}
  
//Arabic to English digits.

  //English to either Persian or Arabic digits.
function EntoIne(inputString) {
    return inputString.replace(/\d/g, d => e ? '٠١٢٣٤٥٦٧٨٩'[d] : '۰۱۲۳۴۵۶۷۸۹'[d])
}
  
//English to Arabic digits using unicode.
function EntoArUni(inputString) {
    return inputString.replace(/\d/g, d => String.fromCharCode('0x066'+d))
}
  
  //English to either Persian or Arabic digits.
function EntoInUnie( inputString ) {
    return inputString.replace(/\d/g, d => String.fromCharCode('0x06'+(e ? '6':'F')+d))
}
  

function convertNumberToFuhsa(inputNumber){
    inputNumber = inputNumber.toString();
    return {
        numeric_string:EntoAr(inputNumber)
    }
}