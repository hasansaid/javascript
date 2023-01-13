//Person kurucu fonksiyon
function Person(ad, soyad) {
    this.ad = ad;
    this.soyad = soyad;
}

Person.prototype.selamVer = function () {
    return `Merhaba ben ${this.ad} ${this.soyad}`;
}


function Ogrenci(ad, soyad, yas, sinif) {
    //PROPERTYLERIN KALITIMI
    Person.call(this, ad, soyad);
    this.yas = yas;
    this.sinif = sinif;
}

//PROTOTYPE FONKSIYONLARIN KALITIMI
Ogrenci.prototype = Object.create(Person.prototype);
Ogrenci.prototype.constructor = Ogrenci;


Ogrenci.prototype.selamVer = function () {
    return `Merhaba ben ${this.sinif}. sınıfa giden ${this.ad} ${this.soyad}`;
}

Ogrenci.prototype.yasiniSoyle = function () {
    return `Merhaba ben ${this.yas} yaşındayım`;
}


const emre = new Person('emre', 'altunbilek');
const hasan = new Person('hasan', 'yılmaz');

console.log(emre.selamVer());
console.log(hasan.selamVer());

const ayse = new Ogrenci('ayse', 'fatma', 21, 9);
console.log(ayse.constructor);
console.log(ayse.selamVer());


/*
function MyArray() {
    
}

MyArray.prototype = Object.create(Array.prototype);

const myArray = new MyArray();

myArray.push(1231);
myArray.push('zs');
myArray.push('sdasdasd');

console.log(myArray);
*/

Array.prototype.kendiMapYapim = function (islem) {
    const yeniDizi = [];
    for (let i = 0; i < this.length; i++) {
        yeniDizi.push(islem(this[i], i));
    }
    return yeniDizi;
}

const dizi = [1, 2, 3];
const yeniDizi = dizi.map(function (sayi) {
    return sayi + 2;
});

const myYenidizi = dizi.kendiMapYapim(function (sayi) {
    return sayi + 2;
});

console.log(yeniDizi);
console.log(myYenidizi);