// 2 tip veri türü vardır.
//Primitive : number, string, boolean, undefined, null, symbol
//Referans : object

let sayi = 6;
console.log (sayi, typeof sayi);
let isim = 'Ali';
console.log (isim, typeof isim);
var durum = false;
console.log (durum, typeof durum);

//kaçış karakteri \'
// let adres ='Ali\'nin adresi ...'
let adres = "Ali'nin adresi  ...";

let soyisim = 'Fındık';
//template literal - backtick
let tamIsim = `${isim} ${soyisim}`;
console.log (tamIsim, typeof tamIsim);
