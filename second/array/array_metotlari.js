let isimler = ["emre", "hasan", "ayşe"];

//verilen diziyi stringe tostring ile dönüştürebiliriz.
console.log(isimler.toString());

//join metotu tostringe benzer işlevi görür, virgül yerine geçtiğimiz değeri elemanların arasına yazar
console.log(isimler.join(" | "));

//push dizinin sonuna eleman ekler ve dizinin yeni eleman sayısını döndürür.
let diziElemanSayisi = isimler.push("ali");
console.log(isimler.toString() + " dizinin eleman sayisi:" + diziElemanSayisi);

//pop dizinin sonundaki elemanı siler ve bu elemanı geriye döndürür.
let dizidenCikarilanEleman = isimler.pop();
console.log(isimler + " çıkarılan eleman:" + dizidenCikarilanEleman);

//dizinin ilk elemanını çıkarır ve bu cıkarılan elemanı döndürür.
isimler.shift();
console.log(isimler.toString());

//dizinin en basına eleman ekler ve dizinin yeni eleman sayısını döndürür.
isimler.unshift("Yeni eleman");
console.log(isimler.toString());

//delete ile verilen indeksteki eleman silinir.
delete isimler[1];
console.log(isimler.toString() + " " + isimler[1]);

let sayilar = [1, 2, 3, 4, 5, 6, 7, 8];

//splice ile dizi elemanları silinip, bu silinen elemanlar yerine yeni elemanlar eklenebilir. 
//Ilk geçilen sayı : elemanların hangi indexksten baslanarak silineceği
//ikinci geçilen sayı : kaç elemanın silineceği 
//sonrasında ise varsa eklenecek elemanları virgülle ayırarak geçeriz.
//bu metot geriye silinen elemanları içeren yeni bir dizi döndürür.
sayilar.splice(8, 0, 9, 10);

console.log(sayilar.toString());

let silinenler = sayilar.splice(0, 4, 15, 20, 25);
console.log(sayilar.toString());
console.log(silinenler);

let tekSayilar = [1, 3, 5];
let ciftSayilar = [2, 4, 6];
//concat ile iki farklı dizi elemanları birleştirilerek yeni bir dizi oluşturalabiliriz.
let sayilarim = tekSayilar.concat(ciftSayilar);
console.log(sayilarim.toString());

//slice metotuna baslangıc ve bitiş indekslerini vererek bu aralıktaki elemanlarla yeni bir
//dizi olusturmus oluruz. Bu işlem ana dizideki elemanları silmez
let yeniDizi = sayilarim.slice(0, 3);

console.log(yeniDizi.toString() + "    " + sayilarim.toString());






