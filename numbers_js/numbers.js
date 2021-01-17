//English to Persian digits.
// https://stackoverflow.com/a/52089026




  String.prototype.EntoFa= function() {
    return this.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])
  }
  
  //English to Arabic digits.
  String.prototype.EntoAr= function() {
    return this.replace(/\d/g, d =>  '٠١٢٣٤٥٦٧٨٩'[d])
  }
  
  //Arabic to English digits.
  String.prototype.ArtoEn= function() {
    return this.replace(/[\u0660-\u0669]/g, 
      d => d.charCodeAt() - 1632)
  }
  
  //Persian to English digits.
  String.prototype.PetoEn= function() {
    return this.replace(/[\u06F0-\u06F9]/g, 
      d => d.charCodeAt() - 1776)
  }
  
  //Persian to Arabic digits.
  String.prototype.PetoAr= function() {
    return this.replace(/[\u06F0-\u06F9]/g, 
      d => '٠١٢٣٤٥٦٧٨٩'[d.charCodeAt() - 1776])
  }
  
  //Arabic to Persian digits.
  String.prototype.ArtoPe= function() {
    return this.replace(/[\u0660-\u0669]/g, 
      d => '۰۱۲۳۴۵۶۷۸۹'[d.charCodeAt() - 1632])
  }
  
  //Both Persian and Arabic to English digits.
  String.prototype.IntoEn= function() {
    return this.replace(/[\u06F0-\u06F9\u0660-\u0669]/g, 
      d => ((c=d.charCodeAt()) > 1775 ? c - 1776 : c - 1632))
  }
  
  //English to either Persian or Arabic digits.
  String.prototype.EntoIn= function(e) {
    return this.replace(/\d/g, 
      d => e ? '٠١٢٣٤٥٦٧٨٩'[d] : '۰۱۲۳۴۵۶۷۸۹'[d])
  }
  
  //English to Persian digits using unicode.
  String.prototype.EntoFaUni= function() {
    return this.replace(/\d/g, d => String.fromCharCode('0x06F'+d))
  }
  
  //English to Arabic digits using unicode.
  String.prototype.EntoArUni= function() {
    return this.replace(/\d/g, d => String.fromCharCode('0x066'+d))
  }
  
  //English to either Persian or Arabic digits.
  String.prototype.EntoInUni= function(e) {
    return this.replace(/\d/g, d => String.fromCharCode('0x06'+(e ? '6':'F')+d))
  }
  


function convertNumberToFuhsa(inputNumber){
    return inputNumber.EntoAr();
}